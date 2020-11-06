import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {GENRE_DEFAULT} from "../const";

const GenreList = (props) => {
  const {genreList, genre, filterFilms, changeGenre, resetGenreList} = props;

  const chooseFilms = (genreItem) => {
    return genreItem !== GENRE_DEFAULT ? filterFilms(genreItem) : resetGenreList();
  };

  return (
    <ul className="catalog__genres-list">
      {genreList.map((genreItem, i) => (
        <li key={`${i}`}
          className={`catalog__genres-item ${genreItem === genre ? `catalog__genres-item--active` : ``} `}>
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              changeGenre(genreItem);
              chooseFilms(genreItem);
            }}
          >
            {genreItem}</a>
        </li>
      ))}
    </ul>
  );
};

GenreList.propTypes = {
  genreList: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  filterFilms: PropTypes.func.isRequired,
  changeGenre: PropTypes.func.isRequired,
  resetGenreList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  filteredFilmCards: state.filteredFilmCards,
  genreList: state.genreList
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.incrementGenre(genre));
  },
  filterFilms(genre) {
    dispatch(ActionCreator.incrementFilmsCards(genre));
  },
  resetGenreList() {
    dispatch(ActionCreator.resetList());
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
