import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold">Search Results</h1>
        <p className="mt-4 text-gray-400">Showing results for: <span className="text-brand-500 font-bold">{query || "nothing"}</span></p>
      </div>
    </div>
  );
};

export default Search;
