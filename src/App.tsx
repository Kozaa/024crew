import React, { useRef, useState, useEffect } from "react";
import {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
} from "styled-components";
import { main, luna } from "./themes";
import Header from "./components/Header";
import HeroPlayer from "./components/HeroPlayer";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  a, button, input {
    font-family: inherit;
    color: inherit;
    text-decoration: none;
    background: none;
    border: none;
    
  }

  body {
    margin: 0;
    min-height: 200vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bg};
    color: white;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 20px;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

const App = () => {
  const [theme, setTheme] = useState<DefaultTheme>(main);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <HeroPlayer />
      </ThemeProvider>
    </>
  );
};

export default App;
