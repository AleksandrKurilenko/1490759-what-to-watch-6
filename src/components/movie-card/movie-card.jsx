import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPreview from "../video-preview/video-preview";
import {connect} from 'react-redux';
import {getFilmGenre, getFilmName, resetAmountShowFilms} from '../../store/action';


const MovieCard = ({title, poster, id, genre, previewVideoLink, resetShowFilmsAmount, getName, getGenre}) => {

  return (
    <article className="small-movie-card catalog__movies-card">
      <VideoPreview poster={poster} id={id} url={previewVideoLink} title = {title}/>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`} onClick={() => {
          resetShowFilmsAmount();
          getName(title);
          getGenre(genre);
        }}>{title}</Link>
      </h3>
    </article >
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  resetShowFilmsAmount: PropTypes.func.isRequired,
  getGenre: PropTypes.func.isRequired,
  getName: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  resetShowFilmsAmount() {
    dispatch(resetAmountShowFilms());
  },
  getGenre(genre) {
    dispatch(getFilmGenre(genre));
  },
  getName(name) {
    dispatch(getFilmName(name));
  },
});

export {MovieCard};
export default connect(null, mapDispatchToProps)(MovieCard);
