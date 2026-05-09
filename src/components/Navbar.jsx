import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    // If the user hits 'Enter' and the query isn't empty
    if (e.key === "Enter" && query.trim()) {
      // Teleport the user to the search page with their query in the URL
      navigate(`/search?q=${query}`);
      // Clear the input after searching
      setQuery("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-black/80 px-8 py-4 backdrop-blur-md border-b border-white/10">
      {/* Logo links back to Home */}
      <Link to="/" className="text-2xl font-black tracking-tighter text-brand-500 hover:opacity-80 transition-opacity">
        FLIX
      </Link>

      {/* Controlled Search Bar */}
      <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 border border-white/5 focus-within:border-white/20 transition-colors">
        <Search className="h-4 w-4 text-gray-500" />
        <input 
          type="text" 
          placeholder="Search movies..." 
          className="bg-transparent text-sm outline-none placeholder:text-gray-500 w-32 sm:w-64"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
    </nav>
  );
};

export default Navbar;
