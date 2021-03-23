import React from 'react';
import PropTypes from 'prop-types';
import {MOVIES_PROP} from '../../utils/validate';
import {getDuration} from '../../utils/common';

const MovieDetails = ({film}) => {
  const {runTime, genre, released, director, starring} = film;
  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {starring.join(`, \n`)}
            </span>
          </p>
        </div>
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{getDuration(runTime).hour}h {getDuration(runTime).minutes}m</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

MovieDetails.propTypes = {
  film: PropTypes.shape(MOVIES_PROP).isRequired,
};

export default MovieDetails;
