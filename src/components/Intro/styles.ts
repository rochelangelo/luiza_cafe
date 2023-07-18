import styled from 'styled-components';

export const Content = styled.div`
    background-color: var(--background);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-bottom: 65px;
`;

export const TextoInto = styled.div`
@font-face {
    font-family: 'AvenirNextLTPro-Regular';
    font-weight: normal;
    font-style: normal;
    src: url('/fonts/AvenirNextLTPro-Regular.otf') format('opentype');
  }

  font-family: 'AvenirNextLTPro-Regular', sans-serif;
  width: 30%;

  @media (max-width: 899px) {
    width: 90%;
  }
`;