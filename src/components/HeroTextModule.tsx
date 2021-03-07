import styled from "styled-components";
import PlayButton from "./SVG/PlayButton";
import { Song, heroSong } from "../data";

interface WrapperProps {
  song: Song;
  isPlaying: boolean;
}

const HeroTextWrapper = styled.div<WrapperProps>`
  width: 60%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 2;
  opacity: ${({ song, isPlaying }) => (isPlaying && song === heroSong ? 0 : 1)};
  transition: opacity 0.5s ease-in;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  @media screen and (max-width: 768px) {
    position: static;
    width: 90vw;
    margin-top: 20px;
    transform: none;
  }
`;

interface Props {
  song: Song;
  handleSongChange: (song: Song) => void;
  videoRef: React.MutableRefObject<HTMLVideoElement | null>;
  isPlaying: boolean;
}

const HeroTextModule = ({
  handleSongChange,
  videoRef,
  song,
  isPlaying,
}: Props) => {
  const handleHeroSongChange = () => {
    handleSongChange(heroSong);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setTimeout(() => {
        videoRef.current!.play();
      }, 700);
    }
  };

  return (
    <HeroTextWrapper song={song} isPlaying={isPlaying}>
      <h2>PIESEK</h2>
      <span style={{ marginBottom: "12px" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum
        sequi tenetur unde quae, beatae, temporibus sed, suscipit excepturi
        eligendi magnam explicabo blanditiis! Inventore suscipit aut ut
        recusandae itaque totam. Est officia facere dicta quia libero dolor
        incidunt excepturi nihil accusantium voluptas quae, quaerat porro.
      </span>

      <PlayButton handleClick={handleHeroSongChange} />
    </HeroTextWrapper>
  );
};

export default HeroTextModule;
