import { useState, useEffect } from 'react';
import { fetchTrendMovies } from 'api';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { results } = await fetchTrendMovies();
        setTrendMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong, reload the page</p>}
      {!isLoading && !error && trendMovies.length > 0 && (
        <MoviesList movies={trendMovies} />
      )}
    </>
  );
}
