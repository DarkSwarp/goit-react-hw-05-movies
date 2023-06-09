import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCast } from 'api';
import Loader from 'components/Loader/Loader';
import css from './Cast.module.css';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCasts = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const results = await fetchCast(movieId);
        setActors(results.cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCasts();
  }, [movieId]);
  return (
    <>
      <div className={css.wrap}>{isLoading && <Loader />}</div>
      {error && <p>Something went wrong, reload the page</p>}
      {!isLoading && !error && actors.length === 0 && (
        <p>Unfortunately, there is no information about the actors.</p>
      )}
      {!isLoading && !error && actors.length > 0 && (
        <ul className={css.list}>
          {actors.map(actor => {
            return (
              <li key={actor.id}>
                <div className={css.container}>
                  {actor.profile_path && (
                    <img
                      className={css.img}
                      src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                      alt=""
                    />
                  )}
                  {!actor.profile_path && (
                    <img
                      className={css.img}
                      src={`https://basket-04.wb.ru/vol593/part59393/59393971/images/big/1.jpg`}
                      alt=""
                    />
                  )}

                  <p className={css.name}>{actor.name}</p>
                  <p className={css.character}>Character {actor.character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
