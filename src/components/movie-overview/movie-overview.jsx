import React from 'react';
import PropTypes from 'prop-types';
import {FilmRatings} from '../../consts';


const getDescriptionRating = (rating) => {
  if (rating < FilmRatings.Normal.RATING) {
    return FilmRatings.Bad.DESCRIPTION;
  } else if (rating >= FilmRatings.Normal.RATING && rating < FilmRatings.Good.RATING) {
    return FilmRatings.Normal.DESCRIPTION;
  } else if (rating >= FilmRatings.Good.RATING && rating < FilmRatings.VeryGood.RATING) {
    return FilmRatings.Good.DESCRIPTION;
  } else if (rating >= FilmRatings.VeryGood.RATING && rating < FilmRatings.Awesome.RATING) {
    return FilmRatings.VeryGood.DESCRIPTION;
  }

  return FilmRatings.Awesome.DESCRIPTION;
};

const MovieOverview = ({rating, scoresCount, description, director, starring}) => {

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getDescriptionRating(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and
            other</strong></p>
      </div>
    </React.Fragment>
  );
};

MovieOverview.propTypes = {
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieOverview;
