import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovie } from 'api';
import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [poster, setPoster] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchOneMovie = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const results = await fetchMovie(movieId);
        setMovie(results);
        setPoster(`https://image.tmdb.org/t/p/w400${results.poster_path}`);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOneMovie();
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong, reload the page</p>}
      {!isLoading && !error && (
        <>
          {movie.poster_path && <img src={poster} alt="" />}
          <>
            <h1>
              {movie.title} (
              {movie.release_date && movie.release_date.slice(0, 4)})
            </h1>
            <p>
              User Score:{' '}
              {movie.vote_average && Math.round(movie.vote_average * 10)}%
            </p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>
              {movie.genres && movie.genres.map(genre => genre.name).join(', ')}
            </p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </>
        </>
      )}
    </>
  );
}
