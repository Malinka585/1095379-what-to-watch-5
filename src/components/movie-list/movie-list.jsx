import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";

export default class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.onFilmCardOverHandle = this.onFilmCardOverHandle.bind(this);
    this.onFilmCardLeaveHandle = this.onFilmCardLeaveHandle.bind(this);

    this.state = {
      activeCard: false,
    };
  }

  onFilmCardOverHandle() {
    this.setState({activeCard: true});
  }

  onFilmCardLeaveHandle() {
    this.setState({activeCard: false});
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <MovieCard key ={`${i}`} film={film} onFilmCardOver={this.onFilmCardOverHandle} onFilmCardLeave={this.onFilmCardLeaveHandle}/>
        ))}
      </div>
    );
  }

}

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};
