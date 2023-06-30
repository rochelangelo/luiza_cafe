import React, { RefObject } from 'react';
import './styles.css';

interface ScrollIndicatorProps {
    contentRef: RefObject<HTMLDivElement>;
  }

  const ScrollIndicator = ({ contentRef }: ScrollIndicatorProps) => {
    const scrollToContent = () => {
      if (contentRef.current) {
        window.scrollTo({
          top: contentRef.current.offsetTop,
          behavior: 'smooth',
        });
      }
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleClick = () => {
      setIsExpanded(!isExpanded);
      if (!isExpanded) {
        scrollToContent();
      }
      else{
        scrollToTop();
      }
    };

    const imageStyles = {
        transform: isExpanded ? 'rotate(180deg)' : 'none',
      };

    return (
        <div className={`scroll-indicator ${isExpanded ? 'scroll-indicator-clicado' : ''}`} onClick={handleClick}>
            <span><img src="images/seta_baixo_50.png" alt="Seta para indicar mais conteudo" style={imageStyles}/></span>
        </div>
    );
};

export default ScrollIndicator;
