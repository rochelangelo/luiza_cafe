import React from 'react';
import { Container, Carousel, Item, Image } from './styles';


const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  900: { items: 2 },
  1024: { items: 2 },
  1300: { items: 3 },
};

const items = [
  <Item>
    <Image src="images/image_01.png" alt="1" />
  </Item>,
  <Item>
    <Image src="images/image_05.png" alt="2" />
  </Item>,
  <Item>
    <Image src="images/image_06.jpg" alt="3" />
  </Item>,
  <Item>
    <Image src="images/image_07.png" alt="4" />
  </Item>,
  <Item>
    <Image src="images/image_08.jpg" alt="5" />
  </Item>,
  <Item>
    <Image src="images/image_10.png" alt="6" />
  </Item>,
];

const CarouselImages = () => {
  return (
    <Container>
      <Carousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy='mobileOnly'
        autoPlay
        autoPlayInterval={2000}
        infinite
      />
    </Container>
  );
};

export default CarouselImages;