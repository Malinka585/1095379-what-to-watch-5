import React from "react";
import PropTypes from "prop-types";
import {secondsToMinutes} from "../../utils/film";

const PlayerScreen = (props) => {
  const {onExitButtonClick,
    isPlaying,
    onPlayClick,
    onFullScreenClick,
    renderPlayer,
    duration,
    progress, film} = props;

  const filmDuration = secondsToMinutes(duration - progress);
  const progressValue = progress * 100 / duration;

  return (
    <div className="player">
      {renderPlayer(`img/player-poster.jpg`, `player__video`)}

      <button type="button" className="player__exit" onClick={() => onExitButtonClick(film.id)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={`${progressValue}`} max="100"></progress>
            <div className="player__toggler" style={{left: `${progressValue}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{filmDuration}</div>
        </div>


        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onPlayClick}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={`${isPlaying ? `#pause` : `#play-s`}`}></use>
            </svg>
            <span>{isPlaying ? `Pause` : `Play`}</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreenClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerScreen.propTypes = {
  onExitButtonClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onFullScreenClick: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default PlayerScreen;
