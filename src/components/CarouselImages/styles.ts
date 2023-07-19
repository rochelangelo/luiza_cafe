import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const Container = styled.div`
    background-color: var(--background);
`;

export const Carousel = styled(AliceCarousel)`
`;

export const Item = styled.div`
    height: 400px;
    width: 400px;
    text-align: center;
    align-items: center;
    overflow: hidden;
`;

export const Image = styled.img`
    height: 400px;
    width: 400px;
`;

export const ContainerTitle = styled.div`
    background-color: var(--background);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-bottom: 25px;
`;

export const Title = styled.h2`
@font-face {
    font-family: 'AvenirNextLTPro-Bold';
    font-weight: bold;
    font-style: normal;
    src: url('./AvenirNextLTPro-Bold.otf') format('opentype');
  }

  font-family: 'AvenirNextLTPro-Bold', sans-serif;
  width: 30%;
  align-items: center;
  text-align: center;
  margin: auto;

  @media (max-width: 899px) {
    width: 90%;
  }
`;