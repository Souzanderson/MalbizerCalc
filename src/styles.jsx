import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Digital7 from "./assets/fonts/digital-7.ttf";

export const theme = {
  primary: "#0B2228",
  primaryContrast: "#EFEFEF",
  secondary: "#216778",
  tertiary: "#979696",
  red: "#c63f3f",
  green: "#8dc63f",
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${theme.secondary};
    font-family: 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  @font-face {
    font-family: Digital7;
    font-style: normal;
    src: url(${Digital7});
  }

  /* width */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #bcd4da;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${theme.primary};
  border-radius: 10px;
}

::-moz-selection {
  /* Code for Firefox */
  color: ${theme.primaryContrast};
  background: ${theme.primary};
}

::selection {
  color: ${theme.primaryContrast};
  background: ${theme.primary};
}
`;

export const NoSelection = styled.section`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: 0;
`;

export const Container = styled.main``;
