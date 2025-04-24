import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [jokes, setJokes] = useState([]);
  const [index, setIndex] = useState(0);
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  
  useEffect(() => {
    axios.get(`${BASE_URL}/api/jokes`)
      .then(res => setJokes(res.data))
      .catch(err => console.error("Error fetching jokes:", err));
  }, []);

  const nextJoke = () => {
    setIndex((prev) => (prev + 1) % jokes.length);
  };

  return (
    <div className="min-h-screen px-4 py-6 flex flex-col items-center justify-center bg-gradient-to-br from-red-600 to-black text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">😂 Joke of the Moment</h1>
      
      {jokes.length > 0 && (
        <div className="bg-gradient-to-br from-black to-red-500 text-white w-full max-w-md p-6 rounded-xl shadow-lg text-center border border-white">
          <h2 className="text-lg md:text-xl font-semibold">{jokes[index].topic}</h2>
          <p className="mt-4 text-base md:text-lg">{jokes[index].joke}</p>
        </div>
      )}

      <button
        onClick={nextJoke}
        className="mt-8 px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-800 transition text-white text-base md:text-lg"
      >
        Next Joke 😆
      </button>
    </div>
  );
}

export default App;
