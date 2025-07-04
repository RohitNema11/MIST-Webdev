import { useState, useEffect } from "react";
import MovieCard from "../components/movieCard";
import { searchMovies, getAnimatedMovies } from "../services/api";

function Animated() {

      const [movies, setMovies] = useState([]);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
       
      useEffect(() => {
        const loadAnimatedMovies = async () => {
          try {
            const animatedMovies = await getAnimatedMovies();
            setMovies(animatedMovies);
          } catch (err) {
            console.log(err);
            setError("Failed to load movies...");
          } finally {
            setLoading(false);
          }
        };
    
        loadAnimatedMovies()
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

export default Animated