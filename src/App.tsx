import React, { useState, useEffect, useRef } from "react";
import {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
} from "styled-components";
import { main, luna } from "./themes";
import Header from "./components/Header";
import HeroPlayer from "./components/HeroPlayer";
import MusicPlayer from "./components/MusicPlayer";
import EventSection from "./components/EventSection";
import MusicSection from "./components/MusicSection";
import CrewSection from "./components/CrewSection";
import Footer from "./components/Footer";
import { Song, heroSong } from "./data";
import MobileMenu from "./components/MobileMenu";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    scroll-behavior: smooth;

    transition: border-color 1s ease-in;

  }

  circle, path, line {
    transition: stroke 1s ease-in, fill 1s ease-in;
  }

  a, button, input {
    font-family: inherit;
    color: inherit;
    text-decoration: none;
    background: none;
    border: none;
  }

  body {
    margin: 0;
    min-height: 200vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bg};
    transition: background-color 1s ease-in;
    color: white;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 15px;

    @media screen and (max-width: 768px) {
      font-size: 13px;
    }
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

const mobile = window.innerWidth < 768;

const App = () => {
  const [theme, setTheme] = useState<DefaultTheme>(main);
  const [showPlayer, setShowPlayer] = useState(false);
  const [song, setSong] = useState<Song>(heroSong);
  const [imgChanging, setImgChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      const headerEnd = window.innerHeight / 10;

      audioRef.current?.addEventListener("ended", (e) => {
        setIsPlaying(false);
      });

      y > headerEnd ? setShowPlayer(true) : setShowPlayer(false);
    });
  }, []);

  useEffect(() => {
    isPlaying ? audioRef.current!.play() : audioRef.current!.pause();
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current!.volume = volume / 100;
  }, [volume]);

  const handleSongChange = (newSong: Song) => {
    if (newSong.title === "olszakumpel - luna (prod. secretrank)") {
      setTheme(luna);
    } else {
      setTheme(main);
    }

    setImgChanging(true);
    setIsPlaying(false);

    setTimeout(() => {
      setSong(newSong);
      audioRef.current!.currentTime = 0;
      setIsPlaying(true);
      setImgChanging(false);
    }, 500);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <audio
          src={song ? song.audio : undefined}
          ref={audioRef}
          crossOrigin="anonymous"
          preload="auto"
        ></audio>
        <Header
          song={song}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          imgChanging={imgChanging}
          volume={volume}
          handleVolumeChange={handleVolumeChange}
        />

        <MusicPlayer
          fixed={true}
          showPlayer={mobile ? isPlaying || showPlayer : showPlayer}
          song={song}
          imgChanging={imgChanging}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          volume={volume}
          handleVolumeChange={handleVolumeChange}
          showVolume={true}
        />
        <HeroPlayer
          handleSongChange={handleSongChange}
          song={song}
          isPlaying={isPlaying}
        />
        <EventSection />
        <MusicSection handleSongChange={handleSongChange} />
        <CrewSection />
        <Footer />
        {mobile ? <MobileMenu /> : null}
      </ThemeProvider>
    </>
  );
};

export default App;
