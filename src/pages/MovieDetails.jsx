import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Loader2, ArrowLeft, Star, Calendar } from "lucide-react";
import Navbar from "../components/Navbar";
import { movies as mockMovies } from "../data/movies";

const MovieDetails = () => {
  // 1. Extract the dynamic :id from the URL
  const { id } = useParams();
  
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // 2. Targeted Fetching (Simulated)
  useEffect(() => {
    const fetchMovieDetails = () => {
      // Find the single movie in our vault that matches the URL ID
      // Note: useParams returns a string, so we convert it to a Number
      const foundMovie = mockMovies.find((m) => m.id === Number(id));
      
      setTimeout(() => {
        setMovie(foundMovie);
        setLoading(false);
      }, 800); // Slightly faster loading for details page
    };

    fetchMovieDetails();
  }, [id]); // This effect re-runs if the 'id' in the URL changes

  return (
    <div>
      <Navbar />
      
      {loading ? (
        <div className="flex flex-col justify-center items-center h-[70vh] gap-4">
          <Loader2 className="h-12 w-12 text-brand-500 animate-spin" />
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Loading details...</p>
        </div>
      ) : !movie ? (
        <div className="p-8 text-center mt-20">
          <h1 className="text-4xl font-black mb-4">Movie Not Found</h1>
          <Link to="/" className="text-brand-500 hover:underline">Go back home</Link>
        </div>
      ) : (
        // 3. Hero Layout
        <div className="relative min-h-[90vh]">
          {/* Faded Background Poster (acting as a backdrop) */}
          <div className="absolute inset-0 z-0">
            <img 
              src={movie.poster} 
              alt="Backdrop" 
              className="w-full h-full object-cover opacity-20 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 p-8 lg:p-20 flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
            
            {/* Back Button & Poster Column */}
            <div className="flex-shrink-0 flex flex-col gap-6">
              <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors w-fit">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-bold">Back to Feed</span>
              </Link>
              
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="w-64 md:w-80 rounded-2xl shadow-2xl shadow-brand-500/20 border border-white/10"
              />
            </div>

            {/* Details Column */}
            <div className="flex flex-col justify-end pt-10 md:pt-0">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
                {movie.title}
              </h1>
              
              <div className="flex items-center gap-6 mb-8 text-sm font-bold uppercase tracking-widest text-gray-300">
                <div className="flex items-center gap-2 bg-brand-500/20 text-brand-400 px-4 py-2 rounded-full border border-brand-500/30">
                  <Star className="w-4 h-4" />
                  {movie.rating} / 10
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Calendar className="w-4 h-4" />
                  {movie.year}
                </div>
              </div>

              <div className="max-w-2xl">
                <h3 className="text-xl font-bold mb-3 text-white">Overview</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {/* Since we don't have real plots in our mock data, we provide a dynamic placeholder */}
                  Experience the magic of {movie.title}, released in {movie.year}. This critically acclaimed masterpiece achieved a stunning rating of {movie.rating}/10. Dive into a world of incredible storytelling, breathtaking visuals, and unforgettable performances that have cemented its place in cinematic history.
                </p>
              </div>
              
              <button className="mt-10 bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest w-fit hover:bg-brand-500 hover:text-white transition-colors shadow-xl">
                Watch Trailer
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
