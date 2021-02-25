import React, { useRef, useState, useEffect } from "react";
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
import lunaImg from "./assets/images/luna.png";
import tempo from "./assets/images/tempo.png";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;

    transition: border-color 1s ease-in;

  }

  circle, path {
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
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

const App = () => {
  const [theme, setTheme] = useState<DefaultTheme>(main);
  const [showPlayer, setShowPlayer] = useState(false);
  const [song, setSong] = useState(tempo);
  const [imgChanging, setImgChanging] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      const headerEnd = window.innerHeight / 10;

      y > headerEnd ? setShowPlayer(true) : setShowPlayer(false);
    });
  }, []);

  const handleSongChange = () => {
    setTheme(luna);
    setImgChanging(true);

    setTimeout(() => {
      setSong(lunaImg);
      setImgChanging(false);
    }, 500);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header song={song} />

        <MusicPlayer
          fixed={true}
          showPlayer={showPlayer}
          onClick={handleSongChange}
          song={song}
          imgChanging={imgChanging}
        />
        <HeroPlayer />
        <EventSection />
        <MusicSection />
        <CrewSection />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
