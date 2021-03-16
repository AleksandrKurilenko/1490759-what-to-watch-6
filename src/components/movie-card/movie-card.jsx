import React, {useState} from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPreview from "../video-preview/video-preview";


const MovieCard = (props) => {
  const {title, poster, id, setActiveIdFilm, previewVideoLink} = props;

  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const onMouseEnterMovieCard = () => {
    setIsActive(true);
    setIsPlaying(true);
  };

  const onMouseLeaveMovieCard = () => {
    setIsActive(false);
  };

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        setActiveIdFilm(id);
        onMouseEnterMovieCard();
      }}
      onMouseLeave={() => onMouseLeaveMovieCard()}>
      <div className="small-movie-card__image">
        {isActive ? <VideoPreview poster={poster} url={previewVideoLink} isPlaying={isPlaying} setIsPlaying={setIsPlaying} /> : <img src={poster} alt={title} width={280} height={175} />}
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
  setActiveIdFilm: PropTypes.func.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
};

export default MovieCard;
