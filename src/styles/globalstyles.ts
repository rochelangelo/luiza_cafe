import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.app {
    background-color: var(--background-color)
}

html{
    @media (max-width: 899px){

    }
    @media (min-width: 900px){

    }
}

body {
    -webkit-font-smoothing: antialiased;
}

body {
    font-family: 'Avenir Next LT Pro', sans-serif;
    font-weight: normal;
}

.img_title {
    @media (max-width: 899px){
        width: 20%;
        object-fit: fill;
    }
    @media (min-width: 900px){
        width: 10%;
        object-fit: fill;
    }
}

.links {
    @media (max-width: 899px){
        flex-direction: column;
        align-items: center;
        width: 70%;
        padding: 10px;
        box-sizing: border-box;
        font-size: 12px;
        font-weight: normal;
    }
    @media (min-width: 900px){
        display: flex;
        justify-content: space-between;
        width: 70%;
        padding: 10px;
        box-sizing: border-box;
        font-size: 12px;
        font-weight: normal;
    }
}

.links a {
    @media (max-width: 899px){
        color: var(--preto);
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        margin-bottom: 5px;
    }
    @media (min-width: 900px){
        color: var(--preto);
        text-decoration: none;
        transition: all 0.3s ease-in-out;
    }
}

.menu {
    background-color: var(--background);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.links a:hover {
    text-decoration: none;
    transform: scale(1.1);
}

.icon_close {
    display: inline-block;
    width: 24px;
    height: 24px;
    position: relative;
    cursor: pointer;
}

.line {
    display: block;
    width: 100%;
    height: 3px;
    background-color: rgb(5, 34, 2);
    position: absolute;
    left: 0;
    transition: all 0.2s ease-in-out;
}

.line:nth-child(1) {
    top: 50%;
    transform: translateY(-100%);
}

.line:nth-child(2) {
    top: 0%;
    transform: translateY(-100%);
}

.icon_close.is-active .line:nth-child(1) {
    transform: translateY(-400%) rotate(45deg);
}

.icon_close.is-active .line:nth-child(2) {
    transform: rotate(-45deg);
}

.video_apresentacao {
    @media (max-width: 1550px){
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    @media (min-width:1551px){
        width: 100%;
        object-fit: cover;
    }
}

:root {
    --background: #f5f5f5;
    --verde: #052202;
    --preto: #050a02;
}
`;