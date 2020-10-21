import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
  const {film, onFilmCardOver, onFilmCardLeave} = props;
  const {id, filmPoster, filmTitle} = film;

  return (
    <article className="small-movie-card catalog__movies-card" id={id} onMouseOver={() => onFilmCardOver()} onMouseLeave={() => onFilmCardLeave()}>
      <div className="small-movie-card__image">
        <img src={`img/${filmPoster}`} alt={filmTitle} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{filmTitle}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    filmTitle: PropTypes.string.isRequired,
    filmPoster: PropTypes.string.isRequired
  }).isRequired,
  onFilmCardOver: PropTypes.func.isRequired,
  onFilmCardLeave: PropTypes.func.isRequired,
};

export default MovieCard;
