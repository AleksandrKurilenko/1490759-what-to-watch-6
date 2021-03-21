import React, {createRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const TIMEOUT_VIDEO_PLAY = 1000;

const VideoPreview = ({poster, title, url}) => {
  const videoRef = createRef();
  const [isPlaying, setIsPlaying] = useState(false);
  // const videoUrl = `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
  let timerID = null;

  useEffect(() => {
    if (isPlaying) {
      timerID = setTimeout(() => {
        videoRef.current.play();
      }, TIMEOUT_VIDEO_PLAY);
    }

    return () => {
      timerID = clearTimeout(timerID);
    };
  }, [isPlaying]);

  const onMouseEnterMovieCard = () => {
    setIsPlaying(true);
  };

  const onMouseLeaveMovieCard = () => {
    setIsPlaying(false);
  };

  return (
    <div className="small-movie-card__image"
      onMouseEnter={() => {
        onMouseEnterMovieCard();
      }}
      onMouseLeave={() => onMouseLeaveMovieCard()}>
      {isPlaying ? < video src={url} ref={videoRef} width={280} height={175} poster={poster} muted></video> : <img src={poster} alt={title} width={280} height={175} />}
    </div>
  );
};

VideoPreview.propTypes = {
  poster: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideoPreview;
