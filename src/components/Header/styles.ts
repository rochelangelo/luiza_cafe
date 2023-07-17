import styled from 'styled-components';

export const Container = styled.div`
background-color: var(--background);
padding-left: 20px;
padding-right: 20px;
margin: 0;
display: flex;
justify-content: space-between;
align-items: center;
height: 100px;
`;

export const Menu = styled.div`
@font-face {
    font-family: 'AvenirNextLTPro-Bold';
    font-weight: bold;
    font-style: normal;
    src: url('/fonts/AvenirNextLTPro-Bold.otf') format('opentype');
}

font-family: 'AvenirNextLTPro-Bold', sans-serif;
background-color: var(--background);
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;