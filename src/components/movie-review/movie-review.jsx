import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {REVIEW_PROP} from '../../utils/validate';

const MovieReview = ({review}) => {
  const {rating, user: {name}, comment, date} = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={dayjs(date).format(`YYYY-MM-D`)}>{dayjs(date).format(`MMMM D, YYYY`)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
};

MovieReview.propTypes = {
  review: PropTypes.shape(REVIEW_PROP).isRequired
};

export default MovieReview;
