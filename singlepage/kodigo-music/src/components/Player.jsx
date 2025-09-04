import React, { useRef, useEffect } from "react";

const Player = ({ track, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, track]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player-container">
      <div className="current-song-info">
        <div className="current-album-cover">
          <img src={track.cover} alt={track.title} />
        </div>
        
        <div className="current-song-details">
          <h4 className="current-title">{track.title}</h4>
          <p className="current-artist">{track.artist}</p>
        </div>
      </div>

      <div className="player-controls">
        <button className="play-btn" onClick={togglePlay}>
          {isPlaying ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </button>
      </div>

      <audio
        ref={audioRef}
        src={track.src}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default Player;