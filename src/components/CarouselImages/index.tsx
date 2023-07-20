import React, { useState } from 'react';
import { Container, Carousel, Item, Image, ContainerTitle, Title } from './styles';
import ModalFavorite from '../ModalFavorite';


const responsive = {
  0: { items: 1 },
  400: { items: 2 },
  521: { items: 2.5 },
  568: { items: 3.5 },
  900: { items: 2 },
  950: { items: 2.3 },
  1024: { items: 2.5 },
  1300: { items: 3 },
  1600: { items: 3.5 },
  1800: { items: 4 },
  2000: { items: 4.5 },
  2200: { items: 5.5 },
  2400: { items: 6 },
};

const items = [
  {
    titulo: 'Frappé',
    conteudo: 'Descrição do item',
    imagemSrc: 'images/image_01.png',
    imagemAlt: '1',
  },
  {
    titulo: 'Soda Italiana',
    conteudo: 'Descrição do item',
    imagemSrc: 'images/image_05.png',
    imagemAlt: '2',
  },
  {
    titulo: 'Título 3',
    conteudo: 'Descrição do item',
    imagemSrc: 'images/image_06.jpg',
    imagemAlt: '3',
  },
  {
    titulo: 'Chocolate Quente',
    conteudo: 'Descrição do item',
    imagemSrc: 'images/image_07.png',
    imagemAlt: '4',
  },
  {
    titulo: 'Expresso',
    conteudo: 'Descrição do item',
    imagemSrc: 'images/image_08.jpg',
    imagemAlt: '5',
  },
  {
    titulo: 'Título 6',
    conteudo: 'Descrição do item',
    imagemSrc: 'images/image_10.png',
    imagemAlt: '6',
  },
];

const CarouselImages = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleItemClick = (item: any, index: number) => {
    setSelectedItem(item);
    setCarouselIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <ContainerTitle>
      <Title>Principais Produtos</Title>
    </ContainerTitle>
      <Carousel
        mouseTracking
        items={items.map((item, index) => (
          // Adicione o evento onClick para cada item do carousel
          <div key={index} onClick={() => handleItemClick(item, index)}>
            {/* Renderize os elementos JSX do Item e Image com as informações corretas */}
            <Item>
              <Image src={item.imagemSrc} alt={item.imagemAlt} />
            </Item>
          </div>
        ))}
        activeIndex={carouselIndex}
        responsive={responsive}
        controlsStrategy='mobileOnly'
        autoPlay
        autoPlayInterval={2000}
        infinite
      />
      {isModalOpen && selectedItem && ( // Verifica se o modal está aberto e há um item selecionado
        <ModalFavorite
          titulo={selectedItem.titulo}
          conteudo={selectedItem.conteudo}
          imagem={selectedItem.imagemSrc}
          onClose={handleCloseModal}
        />
      )}
    </Container>
  );
};

export default CarouselImages;