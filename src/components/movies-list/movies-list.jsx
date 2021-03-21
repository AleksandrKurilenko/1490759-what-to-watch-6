import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import {MOVIES_PROP} from '../../utils/validate';


const MoviesList = ({films, maxFilms}) => {

  return (
    <div className="catalog__movies-list">
      {films.slice(0, maxFilms).map((film) => <MovieCard
        key={film.id}
        id={film.id}
        title={film.name}
        poster={film.previeImage}
        previewVideoLink = {film.previewVideoLink}
      />)}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP).isRequired).isRequired,
  maxFilms: PropTypes.number.isRequired
};

export default MoviesList;
