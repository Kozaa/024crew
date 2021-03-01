import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import { Song } from "../data";

interface WrapperProps {
  fixed?: boolean;
  showPlayer?: boolean;
  onClick?: any;
  song?: Song;
}

const MusicPlayerWrapper = styled.div<WrapperProps>`
  min-width: 120px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.main};
  border: ${({ theme }) => "2px solid " + theme.colors.secondary};

  position: ${({ fixed }) => (fixed ? "fixed" : "static")};
  opacity: ${({ showPlayer }) => (showPlayer ? 1 : 0)};
  top: 40px;
  left: 40px;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr 50px;
  align-items: center;
  justify-items: center;
  flex-shrink: 0;

  align-content: center;

  transition: opacity 0.5s ease-in, min-width 1s ease-in-out,
    border-color 0.5s ease-in;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-left: ${({ theme }) => "2px solid " + theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

interface StyledImgProps {
  imgChanging: boolean;
}

const StyledImg = styled.img<StyledImgProps>`
  height: 46px;
  opacity: ${({ imgChanging }) => (imgChanging ? 0 : 1)};
  transition: opacity 0.5s ease-in;

  :hover {
    cursor: pointer;
  }
`;

interface Props {
  fixed?: boolean;
  showPlayer?: boolean;
  song: Song;
  imgChanging: boolean;
  setPlaySong: Dispatch<SetStateAction<boolean>>;
  playSong: boolean;
}

const MusicPlayer = ({
  fixed = false,
  showPlayer = true,
  song,
  imgChanging = false,
  setPlaySong,
  playSong,
}: Props) => {
  const handleImgClick = () => {
    window.open(song?.youtube, "_blank");
  };

  return (
    <MusicPlayerWrapper fixed={fixed} showPlayer={showPlayer}>
      <StyledImg
        src={song?.img}
        imgChanging={imgChanging}
        title={song?.title}
        onClick={handleImgClick}
      />
      <ButtonWrapper>
        {playSong ? (
          <PauseButton width="80%" height="80%" handleClick={setPlaySong} />
        ) : (
          <PlayButton width="80%" height="80%" handleClick={setPlaySong} />
        )}
      </ButtonWrapper>
    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;
