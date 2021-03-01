import React from "react";
import styled from "styled-components";
import logoColor from "../assets/images/logo-color.png";

const FooterWrapper = styled.footer`
  height: 20vh;
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.main};
  transition: background-color 1s ease-in;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 30px 15px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
  }
`;

const LinkGrid = styled.div`
  display: grid;
  grid-gap: 0 20px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Title = styled.div`
  grid-column: 1 / span 2;
  font-size: 1.2em;
  opacity: 0.8;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    //   text-align: left;
  }
`;

const StyledImg = styled.img`
  height: 90%;

  justify-self: flex-end;

  @media screen and (max-width: 768px) {
    height: auto;
    width: 30%;
    margin-bottom: 20px;
    order: -1;
  }
`;

const Link = styled.a`
  font-size: 0.8em;

  :hover {
    cursor: pointer;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <LinkGrid>
      <Title>Socials</Title>
      <Link>Youtube - 024CREW</Link>
      <Link>Instagram - 024CREW</Link>
      <Link>Instagram - olszakumpel</Link>
      <Link>Youtube - olszakumpel</Link>
    </LinkGrid>
    <LinkGrid>
      <Title>Współpraca</Title>
      <Link style={{ gridColumn: "1 / span 2" }}>email@gmail.com</Link>
      <Link style={{ gridColumn: "1 / span 2" }}>email2@gmail.com</Link>
    </LinkGrid>
    <StyledImg src={logoColor} alt="024crew logo" />
  </FooterWrapper>
);

export default Footer;
