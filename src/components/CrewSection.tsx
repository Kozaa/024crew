import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import crewImg from "../assets/images/crew-member-placeholder.png";
import crewBG from "../assets/images/crew-bg.png";
import CrewMember from "./CrewMember";

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
`;

const crew = [
  {
    name: "xyzkumpel",
    img: crewImg,
  },
  {
    name: "xyzkumpel",
    img: crewImg,
  },
  {
    name: "xyzkumpel",
    img: crewImg,
  },
  {
    name: "xyzkumpel",
    img: crewImg,
  },
  {
    name: "xyzkumpel",
    img: crewImg,
  },
  {
    name: "xyzkumpel",
    img: crewImg,
  },
  {
    name: "xyzkumpel",
    img: crewImg,
  },
  {
    name: "xyzkumpel",
    img: crewImg,
  },
  {
    name: "xyzkumpel",
    img: crewImg,
  },
  {
    name: "xyzkumpel",
    img: crewImg,
  },
];

const CrewSection = () => (
  <CrewSectionWrapper>
    <SectionTitle>CREW</SectionTitle>
    <CrewGrid>
      {crew.map((member) => (
        <CrewMember name={member.name} img={member.img} />
      ))}
    </CrewGrid>
  </CrewSectionWrapper>
);

export default CrewSection;
