import React from "react";
import styled, { useTheme } from "styled-components";

const StyledSvg = styled.svg`
  position: absolute;
  top: 10px;
  right: 20px;

  padding: 3px;

  :hover {
    cursor: pointer;
    background-color: grey;
  }
`;

interface Props {
  handleClick: () => void;
}

const CloseButton = ({ handleClick }: Props) => {
  const theme = useTheme();

  return (
    <StyledSvg
      width="30"
      height="30"
      viewBox="0 0 34 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <line
        x1="1.35355"
        y1="0.646447"
        x2="33.3536"
        y2="32.6464"
        stroke={theme.colors.secondary}
      />
      <line
        y1="-0.5"
        x2="45.2548"
        y2="-0.5"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 33 1)"
        stroke={theme.colors.secondary}
      />
    </StyledSvg>
  );
};

export default CloseButton;
