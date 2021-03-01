import React from "react";
import styled from "styled-components";
import foto1 from "../assets/images/foto1.png";
import foto2 from "../assets/images/foto2.png";
import foto3 from "../assets/images/foto3.png";

const GalleryWrapper = styled.div`
  width: 90%;
  padding: 30px;
  margin: 50px 0;
  display: flex;
  align-items: space-around;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const StyledImg = styled.img`
  height: 25vw;
  border: ${({ theme }) => "2px solid " + theme.colors.secondary};

  @media screen and (max-width: 768px) {
    height: auto;
    width: 80%;
  }
`;

const Gallery = () => (
  <GalleryWrapper>
    <StyledImg src={foto1} />
    <StyledImg src={foto2} />
    <StyledImg src={foto3} />
  </GalleryWrapper>
);

export default Gallery;
