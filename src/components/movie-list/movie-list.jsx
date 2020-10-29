import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import VideoPlayer from "../video-player/video-player";

export default class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.onFilmCardOverHandle = this.onFilmCardOverHandle.bind(this);
    this.onFilmCardLeaveHandle = this.onFilmCardLeaveHandle.bind(this);

    this.lastTimeout = null;

    this.state = {
      activeCard: 0,
    };
  }

  onFilmCardOverHandle(id) {
    if (this.lastTimeout) {
      clearTimeout(this.lastTimeout);
    }

    this.lastTimeout = setTimeout(() => {
      this.setState({activeCard: id});
    }, 1000);
  }

  onFilmCardLeaveHandle() {
    this.setState({activeCard: 0});
    clearTimeout(this.lastTimeout);
    this.lastTimeout = null;
  }

  componentWillUnmount() {
    if (this.lastTimeout) {
      clearTimeout(this.lastTimeout);
    }
  }

  render() {
    const {films} = this.props;
    const {activeCard} = this.state;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <MovieCard
            key ={`${i}`}
            film={film}
            onFilmCardOver={this.onFilmCardOverHandle}
            onFilmCardLeave={this.onFilmCardLeaveHandle}>
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
  }

}

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};
