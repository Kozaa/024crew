import React, { RefObject, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import gameplay from "../assets/images/gameplay.png";
import chillwagon from "../assets/images/chillwagon.png";
import tempo from "../assets/images/tempo.png";
import { Song } from "../data";

const MusicPlayerWrapper = styled.div<Props>`
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
`;

interface Props {
  fixed?: boolean;
  showPlayer?: boolean;
  onClick?: any;
  song?: Song;
  imgChanging?: boolean;
}

const MusicPlayer = ({
  fixed = false,
  showPlayer = true,
  onClick,
  song,
  imgChanging = false,
}: Props) => {
  return (
    <MusicPlayerWrapper fixed={fixed} showPlayer={showPlayer} onClick={onClick}>
      <StyledImg
        src={song?.img}
        imgChanging={imgChanging}
        title={song?.title}
      />
      <ButtonWrapper>
        <PlayButton width="80%" height="80%" />
      </ButtonWrapper>
    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;
