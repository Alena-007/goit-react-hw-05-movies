import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../API';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => setReviews(data))
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <div>
      {error && toast.error(error)};
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
