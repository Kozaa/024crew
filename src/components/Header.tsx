import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo-black-white.png";
import MusicPlayer from "./MusicPlayer";

const HeaderWrapper = styled.nav`
  height: 10vh;
  min-height: 60px;
  width: 100%;
  padding: 0 100px;
  background-color: ${({ theme }) => theme.colors.main};
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-around;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-left: 200px solid transparent;
    border-right: 200px solid transparent;

    border-top: 200px solid #f00;
  }
`;

const StyledImg = styled.img`
  height: 80%;
`;

const StyledNavItem = styled.div`
  width: 10%;
  min-width: 100px;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  flex-shrink: 0;
`;

const Header = () => (
  <HeaderWrapper>
    <StyledNavItem>
      <MusicPlayer />
    </StyledNavItem>
    <StyledNavItem>
      <a href="#">muzyka</a>
    </StyledNavItem>
    <StyledNavItem>
      <StyledImg src={logo} alt="024crew logo" />
    </StyledNavItem>
    <StyledNavItem>
      <a href="#">crew</a>
    </StyledNavItem>
    <StyledNavItem>
      <a href="#">kontakt</a>
    </StyledNavItem>
  </HeaderWrapper>
);

export default Header;
