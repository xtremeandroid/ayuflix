import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,body{
    background-color: black;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
    height: 100%;
    width: 100%;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`;

export default GlobalStyle;
