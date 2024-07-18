import { createGlobalStyle } from "styled-components";
import bgStars from "/assets/background-stars.svg";

export default createGlobalStyle`


* {
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html {
    font-size: 62.5%;
    font-family: 'League Spartan','sans-serif';
}

h1,h2,h3,h4,h5,h6 {
    font-family: "Antonio",'sans-serif'
}

body {
    position:relative;
    min-height: 100vh;
    background-color: #070724;
    background-image: url(${bgStars});
    color:#fff;
    background-size: cover;
    overflow-x:hidden;
}
`;
