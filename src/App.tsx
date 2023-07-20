import React from 'react';
import { GlobalStyles } from './styles/globalstyles';
// import { } from './styles/styles';
import Header from './components/Header';
import VideoApresentacao from './components/VideoApresentacao';
import ScrollIndicator from './components/ScrollIndicator';
import Intro from './components/Intro';
import CarouselImages from './components/CarouselImages';
import SocialBar from './components/SocialBar';

function App() {
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <VideoApresentacao src="images/video.mp4" />
      <ScrollIndicator contentRef={contentRef} />
      <div className="content-wrapper" ref={contentRef}>
        <div id="content">
          <Intro />
          <CarouselImages />
          <SocialBar />
        </div>
      </div>
    </div>
  );
}

export default App;
