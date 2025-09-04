import { useState } from "react";
import SongCard from "../components/SongCard";

export default function Home() {
  const [songs] = useState([
    { id: 1, title: "Song A", artist: "Artist 1" },
    { id: 2, title: "Song B", artist: "Artist 2" },
    { id: 3, title: "Song C", artist: "Artist 3" },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Trending Songs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {songs.map(song => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
}
