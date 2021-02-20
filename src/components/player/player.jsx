import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Player = ({duration}) => {
  const [timeStamp] = useState({
    hour: Math.trunc(duration / 60),
    minutes: duration % 60,
    seconds: (duration * 60) % 60
  });

  return (
    <React.Fragment>
      <div className="player">
        <video src="#" className="player__video" poster="img/player-poster.jpg" />
        <button type="button" className="player__exit">Exit</button>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={30} max={100} />
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{timeStamp.hour}:{timeStamp.minutes}:{timeStamp.seconds}</div>
          </div>
          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>
            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width={27} height={27}>
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Player.propTypes = {
  duration: PropTypes.number.isRequired,
};


export default Player;
