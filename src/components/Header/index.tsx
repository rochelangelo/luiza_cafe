import React, { useState, useEffect } from 'react';
import { Container, Menu } from './styles';

const Header = () => {
    const [menuAberto, setMenuAberto] = useState(true);

    const handleAbrirMenu = () => {
        setMenuAberto(!menuAberto);
    };

    useEffect(() => {
        const isMobile = window.innerWidth <= 900;
        if (isMobile) {
            setMenuAberto(false);
        }
    }, []);

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
                <Menu>
                    <div className="links">
                        <a href="/cardapio">Cardápio</a>
                        <a href="/horarios-endereco">Horários/Endereço</a>
                        <a href="/sobre-nos">Sobre nós</a>
                        <a href="/fale-conosco">Fale conosco</a>
                    </div>
                </Menu>
            )}
        </>
    );
};

export default Header;
