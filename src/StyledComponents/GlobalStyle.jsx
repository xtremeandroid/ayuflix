import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    background-color: black;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`;

export default GlobalStyle;
