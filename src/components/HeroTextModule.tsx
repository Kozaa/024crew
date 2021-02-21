import styled from "styled-components";
import PlayButton from "../components/PlayButton";
import PauseButton from "../components/PauseButton";

const HeroTextWrapper = styled.div`
  width: 60%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

const HeroTextModule = () => (
  <HeroTextWrapper>
    <h2>PIESEK</h2>
    <span style={{ marginBottom: "7px" }}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum sequi
      tenetur unde quae, beatae, temporibus sed, suscipit excepturi eligendi
      magnam explicabo blanditiis! Inventore suscipit aut ut recusandae itaque
      totam. Est officia facere dicta quia libero dolor incidunt excepturi nihil
      accusantium voluptas quae, quaerat porro.
    </span>
    <PlayButton />
  </HeroTextWrapper>
);

export default HeroTextModule;
