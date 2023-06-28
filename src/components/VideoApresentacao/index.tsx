import React, { useRef, useEffect } from 'react';

interface VideoApresentacao {
  src: string;
}

const VideoPlayer: React.FC<VideoApresentacao> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [src]);

  return <video className='video_apresentacao' src={src} ref={videoRef} autoPlay muted loop />;
};

export default VideoPlayer;
