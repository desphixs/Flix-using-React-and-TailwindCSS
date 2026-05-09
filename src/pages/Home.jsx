import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { movies as mockMovies } from "../data/movies";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // We simulate a network delay of 1 second to show off our loading spinner
    const timer = setTimeout(() => {
      setMovies(mockMovies);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-black tracking-tight">Trending Now</h1>
          <p className="text-gray-400 mt-2">The most popular movies on Flix today.</p>
        </header>

        {loading ? (
          <div className="flex flex-col justify-center items-center h-64 gap-4">
            <Loader2 className="h-12 w-12 text-brand-500 animate-spin" />
            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Loading your feed...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {/* Added optional chaining just in case */}
            {movies?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
