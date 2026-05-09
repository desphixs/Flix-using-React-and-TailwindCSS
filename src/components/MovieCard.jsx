import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link 
      to={`/movie/${movie.id}`} 
      className="group relative overflow-hidden rounded-xl bg-zinc-900 transition-all hover:scale-105 hover:ring-2 hover:ring-brand-500"
    >
      {/* Movie Poster */}
      <img 
        src={movie.poster} 
        alt={movie.title} 
        className="h-full w-full object-cover transition-opacity group-hover:opacity-60"
      />
      
      {/* Overlay Title (Visible on hover) */}
      <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-sm font-bold text-white line-clamp-2">{movie.title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
