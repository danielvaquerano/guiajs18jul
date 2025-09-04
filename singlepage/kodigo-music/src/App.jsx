import { useState } from "react";
import Library from "./pages/Library";
import Player from "./components/Player";
import "./App.css";

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Canciones de demo
  const songs = [
    { 
      id: 1, 
      title: "Midnight Vibes", 
      artist: "Electro Waves", 
      src: "/songs/song1.mp3",
      duration: "3:45",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    { 
      id: 2, 
      title: "Summer Dreams", 
      artist: "Sunny Beats", 
      src: "/songs/song2.mp3",
      duration: "4:20",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    { 
      id: 3, 
      title: "Urban Rhythm", 
      artist: "City Beats", 
      src: "/songs/song3.mp3",
      duration: "3:15",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
  ];

  const handleSongSelect = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1>🎵 Kodigo Music</h1>
      </header>

      {/* Librería */}
      <main className="app-main">
        <Library 
          songs={songs} 
          onSelectSong={handleSongSelect} 
          currentSong={currentSong}
          isPlaying={isPlaying}
        />
      </main>

      {/* Reproductor */}
      {currentSong && (
        <footer className="app-footer">
          <Player 
            track={currentSong} 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </footer>
      )}
    </div>
  );
}

export default App;
