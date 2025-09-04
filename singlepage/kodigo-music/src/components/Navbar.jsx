import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-black text-white flex justify-between">
      <h1 className="text-xl font-bold">Kodigo Music</h1>
      <div>
        <Link to="/" className="px-3">Home</Link>
        <Link to="/library" className="px-3">Library</Link>
        <Link to="/login" className="px-3">Login</Link>
      </div>
    </nav>
  );
}
