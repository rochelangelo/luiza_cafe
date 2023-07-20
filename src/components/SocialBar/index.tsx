import React from 'react';
import { Container, Item, Image, Description, Anchor } from './styles';

const items = [
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/cafe.luiza/',
        icon: 'images/logotipo-do-instagram.png',
        description: 'Estamos no Instagram! Siga-nos.',
    },
    {
        name: 'WhatsApp',
        link: 'https://api.whatsapp.com/send?phone=558788070360',
        icon: 'images/whatsapp.png',
        description: 'Contate-nos via Whatsapp.',
    },
];

const SocialBar = () => {

    return (
        <Container>
            {items.map((item, index) => (
                <Anchor href={item.link} target="_blank" key={index}>
                    <Item>
                        <Image src={item.icon} alt={item.name} />
                        <Description>
                            {item.description}
                        </Description>
                    </Item>
                </Anchor>
            ))}
        </Container>
    );
};

export default SocialBar;