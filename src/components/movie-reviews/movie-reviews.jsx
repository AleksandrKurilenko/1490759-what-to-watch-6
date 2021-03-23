import React from 'react';
import PropTypes from 'prop-types';
import {REVIEW_PROP} from '../../utils/validate';
import MovieReview from '../movie-review/movie-review';

const MovieReviews = ({reviews}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review) => <MovieReview review={review} key={review.id} />)}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(REVIEW_PROP)).isRequired
};

export default MovieReviews;
