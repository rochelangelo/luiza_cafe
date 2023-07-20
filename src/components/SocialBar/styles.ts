import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--background);
    display: flex;
    gap: 20px;
    justify-content: center;
`;


export const Item = styled.div`
    height: 400px;
    width: 400px;
    padding-top: 50px;
    text-align: center;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: transform 0.3s ease-in-out; /* Adiciona uma transição de 0.3 segundos à animação */

    &:hover {
        transform: scale(1.1); /* Ao passar o mouse, aumenta em 10% (escala 1.1) */
    }
`;

export const Image = styled.img`
    @media (max-width: 899px){
        height: 10vw;
        width: 10vw;
    }
    @media (min-width: 900px){
        height: 3vw;
        width: 3vw;
    }
`;

export const Description = styled.h3`
    @font-face {
        font-family: 'AvenirNextLTPro-Bold';
        font-weight: bold;
        font-style: normal;
        src: url('./AvenirNextLTPro-Bold.otf') format('opentype');
    }

    font-family: 'AvenirNextLTPro-Bold', sans-serif;
    font-size: 15px;
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;