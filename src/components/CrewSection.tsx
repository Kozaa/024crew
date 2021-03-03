import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import crewBG from "../assets/images/crew-bg.png";
import CrewMember from "./CrewMember";
import Gallery from "./Gallery";
import { crew } from "../data";

const CrewSectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${crewBG});
  background-size: auto 120%;
  background-position: center;
`;

const CrewGrid = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CrewSection = () => (
  <CrewSectionWrapper id="crew">
    <SectionTitle>CREW</SectionTitle>
    <CrewGrid>
      {crew.map((member, i) => (
        <CrewMember {...member} key={i} />
      ))}
    </CrewGrid>
    <Gallery />
  </CrewSectionWrapper>
);

export default CrewSection;
