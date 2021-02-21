import { useTheme } from "styled-components";
import styled from "styled-components";

const StyledSvg = styled.svg<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  :hover {
    cursor: pointer;
  }
`;

interface Props {
  width?: string;
  height?: string;
}

const PauseButton = ({ width = "60px", height = "60px" }: Props) => {
  const theme = useTheme();

  return (
    <StyledSvg
      width={width}
      height={height}
      viewBox="0 0 44 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="22.0833"
        cy="22.5"
        r="21.0833"
        stroke={theme.colors.secondary}
      />
      <rect
        x="15.083"
        y="15.4999"
        width="5.25"
        height="13.4167"
        fill={theme.colors.secondary}
      />
      <rect
        x="23.25"
        y="15.4999"
        width="5.25"
        height="13.4167"
        fill={theme.colors.secondary}
      />
    </StyledSvg>
  );
};

export default PauseButton;
