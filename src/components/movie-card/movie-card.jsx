import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPreview from "../video-preview/video-preview";
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';


const MovieCard = (props) => {
  const {title, poster, id, previewVideoLink, onResetAmountShowFilms} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <VideoPreview poster={poster} id={id} url={previewVideoLink} title = {title}/>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`} onClick={() => onResetAmountShowFilms()}>{title}</Link>
      </h3>
    </article >
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  onResetAmountShowFilms: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onResetAmountShowFilms() {
    dispatch(ActionCreator.resetAmountShowFilms());
  },
});

export {MovieCard};
export default connect(null, mapDispatchToProps)(MovieCard);
