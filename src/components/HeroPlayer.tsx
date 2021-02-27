import { useRef } from "react";
import styled from "styled-components";
import bg1080 from "../assets/videos/bg1080.mp4";
import { Song } from "../data";
import HeroTextModule from "./HeroTextModule";

const HeroPlayerWrapper = styled.main`
  width: 100%;

  position: relative;

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

interface Props {
  handleSongChange: (song: Song) => void;
  song: Song;
  isPlaying: boolean;
}

const HeroPlayer = ({ handleSongChange, song, isPlaying }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <HeroPlayerWrapper>
      <video src={bg1080} width="100%" autoPlay muted loop ref={videoRef} />
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
