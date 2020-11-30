import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {incrementGenre} from "../../store/action";
import {getGenre, getGenreList} from "../../store/selectors";

const GenreList = (props) => {
  const {genreList, genre, changeGenre} = props;

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
  changeGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  genreList: getGenreList(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(incrementGenre(genre));
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
