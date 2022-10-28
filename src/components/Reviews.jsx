import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../API';
import { Box } from 'components/Box';

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
    <Box as="section" pt={4}>
      {isReviews && <p>We don't have any reviews for this movie</p>}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <Box as="h3" mb={3}>
              Author: {review.author}
            </Box>
            <Box as="p" mb={4}>
              {review.content}
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  );
};
