import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReview } from 'api';
import Loader from 'components/Loader/Loader';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { results } = await fetchReview(movieId);
        setReviews(results);

        console.log(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong, reload the page</p>}
      {!isLoading && !error && reviews.length > 0 && (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
