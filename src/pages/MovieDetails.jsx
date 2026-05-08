import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const MovieDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold">Movie Details</h1>
        <p className="mt-4 text-gray-400">Showing details for movie ID: <span className="text-brand-500 font-bold">{id}</span></p>
      </div>
    </div>
  );
};

export default MovieDetails;
