import { useRef } from "react";
import styled from "styled-components";
import bg1080 from "../assets/videos/bg1080.mp4";
import bg720 from "../assets/videos/bg720.mp4";
import { heroSong, Song } from "../data";
import HeroTextModule from "./HeroTextModule";

const HeroPlayerWrapper = styled.main`
  width: 100%;
  min-height: 85vh;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.main};

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
  }
`;

interface VideoProps {
  song: Song;
  isPlaying: boolean;
}

const StyledVideo = styled.video<VideoProps>`
  width: 100%;
  transition: transform 0.5s ease-in-out;

  @media screen and (max-width: 768px) {
    transform: ${({ song, isPlaying }) =>
      song.title === heroSong.title && isPlaying
        ? "translateY(calc(50vmax - 100%))"
        : ""};
  }
`;

interface Props {
  handleSongChange: (song: Song) => void;
  song: Song;
  isPlaying: boolean;
}

const HeroPlayer = ({ handleSongChange, song, isPlaying }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <HeroPlayerWrapper>
      <StyledVideo
        src={window.innerWidth > 768 ? bg1080 : bg720}
        autoPlay
        muted
        loop
        ref={videoRef}
        song={song}
        isPlaying={isPlaying}
      />
      <HeroTextModule
        handleSongChange={handleSongChange}
        videoRef={videoRef}
        song={song}
        isPlaying={isPlaying}
      />
    </HeroPlayerWrapper>
  );
};

export default HeroPlayer;
