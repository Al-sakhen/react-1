import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.isDArkMode ? "white" : "#1b191b")};
    background-color: ${(props) => (props.isDArkMode ? "#1b191b" : "white")};
  }
  button{
    color: ${(props) => (props.isDArkMode ? "#1b191b" : "white")} !important;
    background-color: ${(props) =>
      props.isDArkMode ? "white" : "#1b191b"} !important;
  }
`;
