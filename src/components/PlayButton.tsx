import { useTheme } from "styled-components";
import styled from "styled-components";

const StyledSvg = styled.svg<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex-shrink: 0;

  :hover {
    cursor: pointer;
  }
`;

interface Props {
  width?: string;
  height?: string;
}

const PlayButton = ({ width = "60px", height = "60px" }: Props) => {
  const theme = useTheme();

  return (
    <StyledSvg
      viewBox="0 0 74 74"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="37"
        cy="37"
        r="36"
        fill={theme.colors.main}
        strokeWidth="2"
        stroke={theme.colors.secondary}
      />
      <path
        d="M55 37L28.75 54.3205L28.75 19.6795L55 37Z"
        fill={theme.colors.secondary}
      />
    </StyledSvg>
  );
};

export default PlayButton;
