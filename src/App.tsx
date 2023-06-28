import React from 'react';
import { GlobalStyles } from './styles/globalstyles';
import { } from './styles/styles';
import Header from './components/Header';
import VideoApresentacao from './components/VideoApresentacao';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <VideoApresentacao src="images/video.mp4" />
    </div>
  );
}

export default App;
