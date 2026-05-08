import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white font-sans">
        {/* The Routes component acts as a switch, rendering only the first route that matches the URL */}
        <Routes>
          {/* Path "/" renders the Home page */}
          <Route path="/" element={<Home />} />
          
          {/* Path "/movie/:id" is a dynamic route. The ":id" part can be anything! */}
          <Route path="/movie/:id" element={<MovieDetails />} />
          
          {/* Path "/search" renders the Search results page */}
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;