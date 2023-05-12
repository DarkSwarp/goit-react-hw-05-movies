import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'api';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query) {
      const fetchQueryMovies = async () => {
        try {
          setIsLoading(true);
          setError(false);
          const { results } = await fetchSearchMovies(1, query);
          setSearchMovies(results);
        } catch (error) {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      };

      fetchQueryMovies();
    }
  }, [query]);

  const handlSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target[0].value });
    e.target[0].value = '';
  };

  return (
    <>
      <form onSubmit={handlSubmit}>
        <input
          type="text"
          name="query"
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      {error && <p>Something went wrong, reload the page</p>}
      {!isLoading && !error && searchMovies.length > 0 && (
        <MoviesList movies={searchMovies} />
      )}
    </>
  );
}
