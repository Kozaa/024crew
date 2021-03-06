import React from "react";
import styled from "styled-components";

const VolumeSliderWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: -2px;
  transform: translateY(100%);
  width: calc(100% + 4px);
  height: 20px;

  line-height: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.main};
  border: ${({ theme }) => "2px solid " + theme.colors.secondary};
`;

const StyledInput = styled.input.attrs({
  type: "range",
})`
  -webkit-appearance: none;
  width: 90%;
  background: transparent;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  :focus {
    outline: none;
  }

  ::-ms-track {
    width: 90%;
    cursor: pointer;

    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;

    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.secondary};
    transition: background 1s ease-in;
    cursor: pointer;
    margin-top: -3px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }

  ::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;

    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.secondary};
    transition: background 1s ease-in;
    cursor: pointer;
  }

  ::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;

    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.secondary};
    transition: background 1s ease-in;
    cursor: pointer;
  }

  ::-webkit-slider-runnable-track {
    width: 90%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: ${({ theme }) => theme.colors.secondary};
    transition: background 1s ease-in;
    border-radius: 10px;
    border: 0.2px solid #010101;
  }

  :focus::-webkit-slider-runnable-track {
    background: ${({ theme }) => theme.colors.secondary};
    transition: background 1s ease-in;
  }

  ::-moz-range-track {
    width: 90%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: ${({ theme }) => theme.colors.secondary};
    transition: background 1s ease-in;
    border-radius: 10px;
    border: 0.2px solid #010101;
  }

  ::-ms-track {
    width: 90%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  ::-ms-fill-lower {
    border: 0.2px solid #010101;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  :focus::-ms-fill-lower {
    background: ${({ theme }) => theme.colors.secondary};
    transition: background 0.5s ease-in;
  }
  ::-ms-fill-upper {
    background: ${({ theme }) => theme.colors.secondary};
    transition: background 0.5s ease-in;
    border: 0.2px solid #010101;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
`;

interface Props {
  volume: number;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const VolumeSlider = ({ volume, handleVolumeChange }: Props) => (
  <VolumeSliderWrapper>
    <StyledInput value={volume} onChange={handleVolumeChange} />
  </VolumeSliderWrapper>
);

export default VolumeSlider;
