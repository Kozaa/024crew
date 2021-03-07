import React from "react";
import styled from "styled-components";
import CrewButton from "./SVG/CrewButton";
import MusicButton from "./SVG/MusicButton";
import ContactButton from "./SVG/ContactButton";

const MobileMenuWrapper = styled.nav`
  width: 100%;
  height: 10vmax;

  position: fixed;
  bottom: 0;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.main};
  border-top: ${({ theme }) => "1px solid " + theme.colors.secondary};
  border-bottom: ${({ theme }) => "1px solid " + theme.colors.secondary};
`;

const StyledLink = styled.a`
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;

  transition: background 0.8s;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;

  :hover {
    background: #000000 radial-gradient(circle, transparent 1%, #000000 1%)
      center/15000%;
  }

  :active {
    background-color: #504e4e;
    background-size: 100%;
    transition: background 0s;
  }
`;

const MobileMenu = () => (
  <MobileMenuWrapper>
    <StyledLink href="#muzyka">
      <MusicButton />
    </StyledLink>
    <StyledLink href="#crew">
      <CrewButton />
    </StyledLink>
    <StyledLink href="#">
      <ContactButton />
    </StyledLink>
  </MobileMenuWrapper>
);

export default MobileMenu;
