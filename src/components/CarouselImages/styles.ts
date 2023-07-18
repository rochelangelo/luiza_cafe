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