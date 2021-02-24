import styled from "styled-components";
import SongBlock from "./SongBlock";
import SectionTitle from "./SectionTitle";
import chillwagon from "../assets/images/chillwagon.png";
import gameplay from "../assets/images/gameplay.png";
import kodeksMarki from "../assets/images/kodeks-marki.png";
import krzyz from "../assets/images/krzyz.png";
import luna from "../assets/images/luna.png";
import tempo from "../assets/images/tempo.png";
import trapiraci from "../assets/images/trapiraci.png";
import wiecej from "../assets/images/wiecej.png";

const images = [
  chillwagon,
  kodeksMarki,
  krzyz,
  tempo,
  luna,
  trapiraci,
  gameplay,
  wiecej,
];

const MusicSectionWrapper = styled.section`
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.main};
  transition: background-color 1s ease-in;
`;

const MusicSectionGrid = styled.div`
  width: 80%;
  height: 100vh;
  padding: 20px 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 27.5% 27.5% 22.5% 22.5%;
  // grid-template-rows: 30% 40% 30%;

  align-items: center;
  justify-content: center;
  grid-gap: 20px;
`;

const MusicSection = () => {
  const imgGridConstructor = (img: string) => {
    let rows = "auto";
    let columns = "auto";

    //CHANGE THEM TO SPAN SO MAYBE IT WROKS WELL WHEN WE CHANGE TEMPALTE ON MOBILE
    switch (img) {
      case chillwagon:
        rows = "1 / span 2";
        columns = "1 / span 2";
        break;

      case kodeksMarki:
        rows = "1/2";
        columns = "3/4";
        break;

      case krzyz:
        rows = "1/2";
        columns = "4/5";
        break;

      case tempo:
        rows = "2/3";
        columns = "3/5";
        break;

      case luna:
        rows = "3/4";
        columns = "1/2";
        break;

      case trapiraci:
        rows = "3/4";
        columns = "2/3";
        break;

      case gameplay:
        rows = "3/4";
        columns = "3/4";
        break;

      case wiecej:
        rows = "3/4";
        columns = "4/5";
        break;
    }

    return <SongBlock bg={img} rows={rows} columns={columns} />;
  };

  return (
    <MusicSectionWrapper>
      <SectionTitle>MUZYKA</SectionTitle>
      <MusicSectionGrid>{images.map(imgGridConstructor)}</MusicSectionGrid>
    </MusicSectionWrapper>
  );
};

export default MusicSection;
