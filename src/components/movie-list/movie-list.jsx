import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import Player from "../video-player/video-player";
import withVideo from "../../hocs/with-video/with-video";

const VideoPlayer = withVideo(Player);

const MovieList = (props) => {

  const {films, activeCard, onFilmCardOver, onFilmCardLeave} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        <MovieCard
          key ={`${i}`}
          film={film}
          onFilmCardOver={onFilmCardOver}
          onFilmCardLeave={onFilmCardLeave}>
          <VideoPlayer
            src={film.src}
            isPlaying={activeCard === film.id}
            poster={film.filmPoster}
            width="280"
            heigth="175"
            muted={true}
          />
        </MovieCard>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  onFilmCardOver: PropTypes.func.isRequired,
  onFilmCardLeave: PropTypes.func.isRequired,
  activeCard: PropTypes.number.isRequired,
};

export default MovieList;
