import React from "react";
import SongCard from "../components/SongCard";

const Library = ({ songs, onSelectSong, currentSong, isPlaying }) => {
  return (
    <div className="library-container">
      <h2 className="library-title">Tu Biblioteca</h2>
      
      <div className="songs-grid">
        {songs.map(song => (
          <SongCard 
            key={song.id}
            song={song}
            onSelect={onSelectSong}
            isCurrent={currentSong && currentSong.id === song.id}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;