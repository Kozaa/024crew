import React from "react";
import styled from "styled-components";
import CloseButton from "./SVG/CloseButton";
import { Album, Song } from "../data";

interface ModalProps {
  side: boolean;
  animateModal: boolean;
}

const MultiSongAlbumModalWrapper = styled.div<ModalProps>`
  width: 100%;
  height: 100%;
  padding: 20px 30px;

  position: relative;
  z-index: 1;
  grid-column: ${({ side }) => (side ? "3/5" : "1/3")};
  grid-row: 1/4;
  opacity: ${({ animateModal }) => (animateModal ? 1 : 0)};
  background-color: ${({ theme }) => theme.colors.main};

  transition: opacity 0.5s ease-in, background-color 1s ease-in;
`;

const StyledCloseButton = styled(CloseButton)`
  height: 30px;
  width: 30px;

  position: absolute;

  top: 10px;
  right: 20px;
`;

const AlbumTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5em;
  margin-bottom: 15px;
`;

const SongLink = styled.div`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1em;
  margin-bottom: 5px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

interface Props {
  album: Album | null;
  animateModal: boolean;
  side: boolean;
  closeModal: () => void;
  handleSongChange: (song: Song) => void;
}

const MultiSongAlbumModal = ({
  album,
  animateModal,
  side,
  closeModal,
  handleSongChange,
}: Props) => (
  <MultiSongAlbumModalWrapper side={side} animateModal={animateModal}>
    <AlbumTitle>{album?.title.toUpperCase()}</AlbumTitle>
    {album?.songs.map((song) => (
      <SongLink key={song.title} onClick={() => handleSongChange(song)}>
        {song.title}
      </SongLink>
    ))}
    <StyledCloseButton handleClick={closeModal} />
  </MultiSongAlbumModalWrapper>
);

export default MultiSongAlbumModal;
