import { useState, useEffect } from "react";
import MovieCard from "../components/movieCard";
import { searchMovies, getActionMovies } from "../services/api";

function Action() {

      const [movies, setMovies] = useState([]);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
       
      useEffect(() => {
        const loadActionMovies = async () => {
          try {
            const actionMovies = await getActionMovies();
            setMovies(actionMovies);
          } catch (err) {
            console.log(err);
            setError("Failed to load movies...");
          } finally {
            setLoading(false);
          }
        };
    
        loadActionMovies()
      }, []);
    

        return(
            <div className="p-8 bg-gray-950 min-h-screen text-white">
  {error && (
    <div className="text-red-500 font-semibold mb-4">
      {error}
    </div>
  )}

  {loading ? (
    <div className="text-center text-lg font-medium">Loading...</div>
  ) : (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  )}
</div>
)
    
}

export default Action