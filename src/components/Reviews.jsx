import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../API';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => setReviews(data))
      .catch(error => setError(error.message));
  }, [movieId]);

  const isReviews = reviews.length === 0 || error;

  return (
    <div>
      {isReviews && <p>We don't have any reviews for this movie</p>}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <div>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
