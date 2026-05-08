import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold">Home Page</h1>
        <p className="mt-4 text-gray-400">Trending movies will appear here.</p>
      </div>
    </div>
  );
};

export default Home;
