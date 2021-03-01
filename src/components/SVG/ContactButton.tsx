import React from "react";
import styled, { useTheme } from "styled-components";

const StyledSvg = styled.svg`
  height: 100%;
  padding: 3px;
`;

interface Props {
  handleClick?: () => void;
}

const ContactButton = ({ handleClick }: Props) => {
  const theme = useTheme();

  return (
    <StyledSvg
      viewBox="0 -67 380 380"
      xmlns="http://www.w3.org/2000/svg"
      fill={theme.colors.secondary}
    >
      <path d="m30 0h320c14.402344.0390625 26.761719 10.261719 29.5 24.398438l-189.5 105.601562-189.5-105.601562c2.738281-14.136719 15.097656-24.3593755 29.5-24.398438zm320 246.601562h-320c-16.546875-.050781-29.953125-13.453124-30-30v-169.601562l185.101562 103.199219c1.5.824219 3.183594 1.273437 4.898438 1.300781 1.722656.019531 3.414062-.429688 4.898438-1.300781l185.101562-103.199219v169.601562c-.011719 16.5625-13.4375 29.984376-30 30zm0 0" />
    </StyledSvg>
  );
};

export default ContactButton;
