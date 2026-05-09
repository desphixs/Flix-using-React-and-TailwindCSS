import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader2, Search as SearchIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { movies as mockMovies } from "../data/movies";

const Search = () => {
  // 1. Extract the search query from the URL (?q=batman)
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetching Results (Watching the query for changes)
  useEffect(() => {
    const fetchResults = () => {
      setLoading(true);
      
      // Filter our vault for movies that include the search query in their title
      const filtered = mockMovies.filter((movie) => 
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      
      setTimeout(() => {
        setResults(filtered);
        setLoading(false);
      }, 600); // Quick response for search
    };

    fetchResults();
  }, [query]); // Re-run whenever the query in the URL changes

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <header className="mb-12">
          <div className="flex items-center gap-4 text-gray-400 mb-2 uppercase text-xs font-bold tracking-[0.2em]">
            <SearchIcon className="w-4 h-4" />
            <span>Search Results</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight">
            Showing results for: <span className="text-brand-500 italic">"{query}"</span>
          </h1>
        </header>

        {loading ? (
          <div className="flex flex-col justify-center items-center h-64 gap-4">
            <Loader2 className="h-12 w-12 text-brand-500 animate-spin" />
            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Searching the vault...</p>
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
            <h2 className="text-2xl font-bold text-gray-400">No movies found matching your search.</h2>
            <p className="text-gray-500 mt-2">Try searching for something else like "Interstellar" or "Batman".</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
