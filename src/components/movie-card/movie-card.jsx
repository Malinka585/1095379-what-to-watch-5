import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
  const {film, onFilmCardOver, onFilmCardLeave, children} = props;
  const {id, filmTitle} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={id}
      onMouseOver={() => onFilmCardOver(id)}
      onMouseLeave={() => onFilmCardLeave()}>
      {children}
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
  children: PropTypes.object.isRequired,
};

export default MovieCard;
