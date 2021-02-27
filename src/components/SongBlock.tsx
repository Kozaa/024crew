import styled from "styled-components";

interface SongBlockProps {
  rows: string;
  columns: string;
}

const SongBlockWrapper = styled.div<SongBlockProps>`
  width: 100%;
  height: 100%;
  grid-row: ${({ rows }) => rows};
  grid-column: ${({ columns }) => columns};
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  border: ${({ theme }) => "2px solid " + theme.colors.secondary};
  overflow: hidden;
`;

interface StyledSongBlockProps {
  bg: string;
}

const StyledSongBlock = styled.div<StyledSongBlockProps>`
  width: 100%;
  height: 100%;
  background-image: ${({ bg }) => "url(" + bg + ")"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;

  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const SongTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5em;
  text-align: center;

  :hover {
    cursor: pointer;
  }

  :hover + div {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

interface Props {
  bg: string;
  rows: string;
  columns: string;
  title: string;
  handleClick: () => void;
}

const SongBlock = ({ bg, columns, rows, title, handleClick }: Props) => (
  <SongBlockWrapper rows={rows} columns={columns} onClick={handleClick}>
    <StyledSongBlock bg={bg} />

    <SongTitle>{title}</SongTitle>
  </SongBlockWrapper>
);

export default SongBlock;
