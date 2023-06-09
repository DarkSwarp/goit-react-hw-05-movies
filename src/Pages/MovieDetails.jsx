import { NavLink,Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovie } from 'api';
import Loader from 'components/Loader/Loader';
import { useState, useEffect, useRef } from 'react';
import css from './MovieDetails.module.css';
import styled from 'styled-components';
import { Button } from '@mui/material';

const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.7;
  text-decoration: none;
  color: black;
  transition: color 0.2s ease-in-out;

  &.active,
  &:hover,
  &:focus {
    color: orange;
    text-decoration: underline;
  }
`;

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [poster, setPoster] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');
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
      <div className={css.wrapLoader}>{isLoading && <Loader />}</div>
      {error && <p>Something went wrong, reload the page</p>}
      {!isLoading && !error && (
        <main>
          <div className={css.container}>
            <Button type="button" variant="contained">
              <Link to={backLinkHref.current}>
                <span className={css.btnText}>Go Back</span>
              </Link>
            </Button>
            <div className={css.info}>
              {movie.poster_path && (
                <img src={poster} alt="" className={css.img} />
              )}
              {!movie.poster_path && (
                <img
                  className={css.img}
                  src="https://kartinki.pibig.info/uploads/posts/2023-04/1681549820_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-2.jpg"
                  alt=""
                />
              )}
              <div>
                <h1 className={css.title}>
                  {movie.title} (
                  {movie.release_date && movie.release_date.slice(0, 4)})
                </h1>
                <p className={css.score}>
                  User Score:{' '}
                  {movie.vote_average && Math.round(movie.vote_average * 10)}%
                </p>
                <h3>Overview</h3>
                <p className={css.overview}>{movie.overview}</p>
                <h3>Genres</h3>
                <p className={css.genres}>
                  {movie.genres &&
                    movie.genres.map(genre => genre.name).join(', ')}
                </p>
              </div>
            </div>
            <div className={css.containerLink}>
              <div className={css.wrap}>
                <p className={css.text}>Additional information:</p>
                <ul className={css.list}>
                  <li>
                    <StyledNavLink to="cast">Cast</StyledNavLink>
                  </li>
                  <li>
                    <StyledNavLink to="reviews">Reviews</StyledNavLink>
                  </li>
                </ul>
              </div>
              <Outlet />
            </div>
          </div>
        </main>
      )}
    </>
  );
}
