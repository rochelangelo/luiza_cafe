import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Container, ModalContent, CloseButton, Title, Content, Image } from './styles';

interface ModalFavoriteProps {
    titulo: string;
    conteudo: string;
    imagem: string;
    onClose: () => void;
}

const ModalFavorite: React.FC<ModalFavoriteProps> = ({ titulo, conteudo, imagem, onClose }) => {

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // Fecha o modal somente se o clique ocorrer fora do conteúdo do modal
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <Container onClick={handleOutsideClick}>
            <ModalContent>
                <CloseButton onClick={onClose}>
                    <div className={`icon_close is-active`}>
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                    </div>
                </CloseButton>
                <Title>{titulo}</Title>
                <Content>{conteudo}</Content>
                <Image src={imagem} alt={titulo} />
            </ModalContent>
        </Container>,
        document.getElementById('modal-root') as HTMLElement
    );
};

export default ModalFavorite;
