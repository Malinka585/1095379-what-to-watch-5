import React from "react";
import PropTypes from "prop-types";
import {formatFilmDuration} from "../../utils/film";

const DetailsTab = (props) => {
  const {film} = props;
  const {filmGenre, filmRegisseur, filmActors, filmDate, filmDuration} = film;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{filmRegisseur}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {filmActors.join(`,  \n`)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{formatFilmDuration(filmDuration)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{filmGenre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{filmDate}</span>
        </p>
      </div>
    </div>
  );
};

DetailsTab.propTypes = {
  film: PropTypes.shape({
    filmDate: PropTypes.string.isRequired,
    filmRegisseur: PropTypes.string.isRequired,
    filmActors: PropTypes.array.isRequired,
    filmGenre: PropTypes.string.isRequired,
    filmDuration: PropTypes.number.isRequired,
  }).isRequired,
};

export default DetailsTab;
