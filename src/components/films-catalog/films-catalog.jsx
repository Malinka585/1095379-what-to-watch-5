import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list";
import GenreList from "../genre-list/genre-list";
import {connect} from "react-redux";
import {getFilteredFilms} from "../../store/selectors";
import ShowMoreButton from "../show-more-button/show-more-button";
import withMovieList from "../../hocs/with-movie-list/with-movie-list";

const MovieListWrapped = withMovieList(MovieList);

const FilmsCatalog = (props) => {
  const {filmsCountToShow, filteredFilms} = props;


  return (
    <React.Fragment>
      <GenreList/>
      <MovieListWrapped films={filteredFilms.slice(0, filmsCountToShow)}/>
      {filteredFilms.length > filmsCountToShow && <ShowMoreButton/>}
    </React.Fragment>
  );
};


const mapStateToProps = (state) => ({
  filmsCountToShow: state.FILM.filmsCountToShow,
  filteredFilms: getFilteredFilms(state),
});

FilmsCatalog.propTypes = {
  filteredFilms: PropTypes.array.isRequired,
  filmsCountToShow: PropTypes.number.isRequired,
};

export {FilmsCatalog};
export default connect(mapStateToProps)(FilmsCatalog);
