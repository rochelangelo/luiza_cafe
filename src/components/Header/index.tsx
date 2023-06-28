import React, { useState, useEffect } from 'react';
import { Container } from './styles';

const Header = () => {
    const [menuAberto, setMenuAberto] = useState(true);

    const handleAbrirMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <>
            <Container>
                <img className="img_title" src="images/cafeLuiza1.png" alt="Café Luiza" />
                <div className={`icon_close ${menuAberto ? 'is-active' : ''}`} onClick={handleAbrirMenu}>
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                </div>
            </Container>
            {menuAberto && (
                <div className="menu">
                    <div className="links">
                        <a href="#">Cardápio</a>
                        <a href="#">Horários/Endereço</a>
                        <a href="#">Sobre nós</a>
                        <a href="#">Fale conosco</a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
