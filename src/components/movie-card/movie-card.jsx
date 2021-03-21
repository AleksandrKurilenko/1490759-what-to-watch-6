import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPreview from "../video-preview/video-preview";


const MovieCard = (props) => {
  const {title, poster, id, previewVideoLink} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <VideoPreview poster={poster} id={id} url={previewVideoLink} title = {title}/>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article >
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
};

export default MovieCard;
