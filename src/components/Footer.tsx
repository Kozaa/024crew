import React from "react";
import styled from "styled-components";
import logoColor from "../assets/images/logo-color.png";

const FooterWrapper = styled.footer`
  height: 20vh;
  padding: 30px 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr 1fr;

  background-color: ${({ theme }) => theme.colors.main};
  transition: background-color 1s ease-in;
`;

const Title = styled.span`
  font-size: 1.2em;
  opacity: 0.8;
  margin-bottom: 10px;
`;

const StyledImg = styled.img`
  height: 90%;
  grid-column: 5 / 6;
  grid-row: 1 / 4;
  justify-self: flex-end;
`;

const Link = styled.a`
  font-size: 0.8em;
`;

const Footer = () => (
  <FooterWrapper>
    <Title>Socials</Title>
    <Title style={{ gridColumn: "3/4" }}>Współpraca</Title>
    <span style={{ gridColumn: "4/5", gridRow: "1/3" }}></span>
    <Link>Youtube - 024CREW</Link>
    <Link>Instagram - 024CREW</Link>
    <Link>email@gmail.com</Link>
    <Link>Youtube - olszakumpel</Link>
    <Link>Instagram - olszakumpel</Link>
    <Link>email2@gmail.com</Link>
    <StyledImg src={logoColor} alt="024crew logo" />
  </FooterWrapper>
);

export default Footer;
