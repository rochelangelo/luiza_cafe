import React from 'react';
import { Element, scroller } from 'react-scroll';
import { GlobalStyles } from './styles/globalstyles';
import { } from './styles/styles';
import Header from './components/Header';
import VideoApresentacao from './components/VideoApresentacao';
import ScrollIndicator from './components/ScrollIndicator';
import Intro from './components/Intro';

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
        </div>
      </div>
    </div>
  );
}

export default App;
