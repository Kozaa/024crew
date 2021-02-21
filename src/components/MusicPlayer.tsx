import React from "react";
import styled from "styled-components";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import gameplay from "../assets/images/gameplay.png";
import chillwagon from "../assets/images/chillwagon.png";
import tempo from "../assets/images/tempo.png";

const MusicPlayerWrapper = styled.div`
  min-width: 120px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.main};
  border: ${({ theme }) => "2px solid " + theme.colors.secondary};

  display: grid;
  grid-template-columns: 1fr 50px;
  align-items: center;
  justify-items: center;

  align-content: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-left: ${({ theme }) => "2px solid " + theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled.img`
  height: 46px;
`;

const MusicPlayer = () => (
  <MusicPlayerWrapper>
    <StyledImg src={tempo} />
    <ButtonWrapper>
      <PlayButton width="80%" height="80%" />
    </ButtonWrapper>
  </MusicPlayerWrapper>
);

export default MusicPlayer;
