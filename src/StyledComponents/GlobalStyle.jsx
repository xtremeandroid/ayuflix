import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    background-color: black;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`;

export default GlobalStyle;
