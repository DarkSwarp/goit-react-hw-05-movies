import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCast } from 'api';
import Loader from 'components/Loader/Loader';

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
        {isLoading && <Loader />}
        {error && <p>Something went wrong, reload the page</p>}
        {!isLoading && !error && actors.length === 0 && (
          <p>Unfortunately, there is no information about the actors.</p>
        )}
        {!isLoading && !error && actors.length > 0 && (
          <ul>
            {actors.map(actor => {
              return (
                <li key={actor.id}>
                  {actor.profile_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                      alt=""
                    />
                  )}
                  {!actor.profile_path && (
                    <img
                      width="200"
                      height="300"
                      src={`https://kartinki.pibig.info/uploads/posts/2023-04/1681549820_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-2.jpg`}
                      alt=""
                    />
                  )}

                  <p>{actor.name}</p>
                  <p>Character {actor.character}</p>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
}
