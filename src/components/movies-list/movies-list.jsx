import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';


const MoviesList = ({films}) => {
  const [setActiveIdFilm] = useState(0);

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <MovieCard
        key={film.id}
        image={film.previeImage}
        title={film.name}
        id={film.id}
        setActiveIdFilm = {setActiveIdFilm}
      />)}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MoviesList;
