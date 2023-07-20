import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  max-width: 450px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px){
    max-width: 250px;
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end; /* Alinhe o botão "Fechar" à direita */
  background-color: transparent;
  padding-top: 10px;
  border: none;
  cursor: pointer;
`;

export const Title = styled.h2`
  margin-top: 0;
`;

export const Content = styled.p`
  margin-bottom: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
`;