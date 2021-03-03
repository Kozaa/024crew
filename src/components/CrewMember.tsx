import React from "react";
import styled from "styled-components";
import instagramIcon from "../assets/images/instagram.png";
import { CrewMemberType } from "../data";

const CrewMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgWrapper = styled.a`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  :before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    background-color: rgba(10, 10, 10, 0.4);
    background-image: url(${instagramIcon});
    background-size: 50% 50%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;

    transition: opacity 0.2s ease-in;
  }

  :hover:before {
    opacity: 1;
    cursor: pointer;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const CrewMember = ({ img, name, linkInstagram }: CrewMemberType) => (
  <CrewMemberWrapper>
    <ImgWrapper href={linkInstagram} target="_blank" rel="noopener noreferrer">
      <StyledImg src={img} alt="crew member" />
    </ImgWrapper>
    <span style={{ margin: "20px 0" }}>{name}</span>
  </CrewMemberWrapper>
);

export default CrewMember;
