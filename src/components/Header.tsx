import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import logo from "../assets/images/logo-black-white.png";
import { Song } from "../data";
import MusicPlayer from "./MusicPlayer";

const HeaderWrapper = styled.nav`
  height: 10vh;
  min-height: 60px;
  width: 100%;
  padding: 0 100px;
  background-color: ${({ theme }) => theme.colors.main};
  transition: background-color 1s ease-in;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-around;

  :after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-left: 200px solid transparent;
    border-right: 200px solid transparent;

    border-top: ${({ theme }) => "200px solid " + theme.colors.secondary};
  }

  @media screen and (max-width: 768px) {
    height: 7vh;

    :after {
      border-width: 150px;
    }
  }
`;

const StyledImg = styled.img`
  height: 80%;
  z-index: 1;
`;

const StyledNavItem = styled.div`
  width: 10%;
  min-width: 100px;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  flex-shrink: 0;
`;

interface Props {
  song: Song;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  isPlaying: boolean;
  imgChanging: boolean;
  volume: number;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const width = window.innerWidth;

const Header = ({
  song,
  setIsPlaying,
  isPlaying,
  imgChanging,
  volume,
  handleVolumeChange,
}: Props) => {
  return width > 768 ? (
    <HeaderWrapper>
      <StyledNavItem>
        <MusicPlayer
          song={song}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          imgChanging={imgChanging}
          volume={volume}
          handleVolumeChange={handleVolumeChange}
          showVolume={false}
        />
      </StyledNavItem>
      <StyledNavItem>
        <a href="#muzyka">muzyka</a>
      </StyledNavItem>
      <StyledNavItem>
        <StyledImg src={logo} alt="024crew logo" />
      </StyledNavItem>
      <StyledNavItem>
        <a href="#crew">crew</a>
      </StyledNavItem>
      <StyledNavItem>
        <a href="#">kontakt</a>
      </StyledNavItem>
    </HeaderWrapper>
  ) : (
    <HeaderWrapper>
      <StyledImg src={logo} alt="024crew logo" />
    </HeaderWrapper>
  );
};

export default Header;
