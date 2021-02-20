import React from "react";
import PropTypes from 'prop-types';

const MovieCard = ({image, title, id, setActiveIdFilm}) => {
  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={() => setActiveIdFilm(id)}>
      <div className="small-movie-card__image">
        <img src={image} alt={title} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setActiveIdFilm: PropTypes.func.isRequired
};

export default MovieCard;
