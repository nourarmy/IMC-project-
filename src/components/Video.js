import React, { useRef } from 'react';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="video-player">
      <video ref={videoRef} controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={handlePlayPause}>Play/Pause</button>
    </div>
  );
};

export default VideoPlayer;
