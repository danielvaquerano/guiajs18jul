import React from "react";

const SongCard = ({ song, onSelect, isCurrent, isPlaying }) => {
  const handleClick = () => {
    onSelect(song);
  };

  return (
    <div className={`song-card ${isCurrent ? 'current' : ''}`}>
      <div className="album-cover">
        <img src={song.cover} alt={song.title} />
      </div>
      
      <div className="song-info">
        <h3 className="song-title">{song.title}</h3>
        <p className="song-artist">{song.artist}</p>
        <p className="song-duration">{song.duration}</p>
      </div>
      
      <div className="player-controls">
        <button 
          className={`play-btn ${isCurrent && isPlaying ? 'playing' : ''}`}
          onClick={handleClick}
        >
          {isCurrent && isPlaying ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </button>
      </div>
      
      {isCurrent && (
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: isPlaying ? '50%' : '0%' }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SongCard;