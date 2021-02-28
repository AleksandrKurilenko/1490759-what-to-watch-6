import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const MovieCard = (props) => {
  const {title, poster, id, setActiveIdFilm} = props;
  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={() => setActiveIdFilm(id)}>
      <div className="small-movie-card__image">
        <img src={poster} alt={title} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setActiveIdFilm: PropTypes.func.isRequired
};

export default MovieCard;
