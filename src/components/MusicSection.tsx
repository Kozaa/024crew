import styled from "styled-components";
import SongBlock from "./SongBlock";
import SectionTitle from "./SectionTitle";
import MultiSongAlbumModal from "./MultiSongAlbumModal";
import { songData, Album, Song } from "../data";
import { useState } from "react";

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
  grid-template-areas:
    "pos0 pos0 pos1 pos2"
    "pos0 pos0 pos3 pos3"
    "pos4 pos5 pos6 pos7";
  grid-template-columns: 27.5% 27.5% 22.5% 22.5%;
  position: relative;

  align-items: center;
  justify-content: center;
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-areas:
      "pos0 pos0"
      "pos0 pos0"
      "pos1 pos2"
      "pos3 pos3"
      "pos4 pos5"
      "pos6 pos7";
    grid-template-columns: 50% 50%;
  }
`;

interface Props {
  handleSongChange: (song: Song) => void;
}

const MusicSection = ({ handleSongChange }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [modalAlbum, setModalAlbum] = useState<Album | null>(null);

  const handleMultiSongAlbumClick = (album: Album) => {
    setShowModal(true);
    setAnimateModal(false);

    setTimeout(() => {
      setAnimateModal(true);
      setModalAlbum(album);
    }, 100);
  };

  const handleCloseModal = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setShowModal(false);
    }, 500);
  };

  const imgGridConstructor = (album: Album, i: number) => {
    const isMultiSongAlbum = album.songs.length > 1;

    return (
      <SongBlock
        bg={album.img}
        title={album.title}
        gridPosition={`pos${i}`}
        handleClick={
          isMultiSongAlbum
            ? () => handleMultiSongAlbumClick(album)
            : () => handleSongChange(album.songs[0])
        }
        key={album.title}
      />
    );
  };

  return (
    <MusicSectionWrapper id="muzyka">
      <SectionTitle>MUZYKA</SectionTitle>

      <MusicSectionGrid>
        {songData.map(imgGridConstructor)}
        {showModal ? (
          <MultiSongAlbumModal
            album={modalAlbum}
            animateModal={animateModal}
            side={modalAlbum?.title === "chillwagon"}
            closeModal={handleCloseModal}
            handleSongChange={handleSongChange}
          />
        ) : null}
      </MusicSectionGrid>
    </MusicSectionWrapper>
  );
};

export default MusicSection;
