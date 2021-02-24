import React from "react";
import styled from "styled-components";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import gameplay from "../assets/images/gameplay.png";
import chillwagon from "../assets/images/chillwagon.png";
import tempo from "../assets/images/tempo.png";

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

  transition: opacity 0.5s ease-in;
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

const StyledImg = styled.img`
  height: 46px;
`;

interface Props {
  fixed?: boolean;
  showPlayer?: boolean;
  onClick?: any;
}

const MusicPlayer = ({ fixed = false, showPlayer = true, onClick }: Props) => (
  <MusicPlayerWrapper fixed={fixed} showPlayer={showPlayer} onClick={onClick}>
    <StyledImg src={tempo} />
    <ButtonWrapper>
      <PlayButton width="80%" height="80%" />
    </ButtonWrapper>
  </MusicPlayerWrapper>
);

export default MusicPlayer;
