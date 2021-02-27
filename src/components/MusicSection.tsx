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
  grid-template-columns: 27.5% 27.5% 22.5% 22.5%;
  position: relative;

  align-items: center;
  justify-content: center;
  grid-gap: 20px;
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
    }, 500);
  };

  const handleCloseModal = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setShowModal(false);
    }, 500);
  };

  const imgGridConstructor = (album: Album) => {
    let rows = "auto";
    let columns = "auto";
    const isMultiSongAlbum = album.songs.length > 1;

    //CHANGE THEM TO SPAN SO MAYBE IT WROKS WELL WHEN WE CHANGE TEMPALTE ON MOBILE
    switch (album.title) {
      case "chillwagon":
        rows = "1 / span 2";
        columns = "1 / span 2";
        break;

      case "kodeks marki":
        rows = "1/2";
        columns = "3/4";
        break;

      case "krzyż":
        rows = "1/2";
        columns = "4/5";
        break;

      case "tempo":
        rows = "2/3";
        columns = "3/5";
        break;

      case "luna":
        rows = "3/4";
        columns = "1/2";
        break;

      case "trapiraci":
        rows = "3/4";
        columns = "2/3";
        break;

      case "gameplay":
        rows = "3/4";
        columns = "3/4";
        break;

      case "więcej":
        rows = "3/4";
        columns = "4/5";
        break;
    }

    return (
      <SongBlock
        bg={album.img}
        rows={rows}
        columns={columns}
        title={album.title.toUpperCase()}
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
