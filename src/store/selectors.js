import {createSelector} from "reselect";
import {GENRE_DEFAULT} from "../const";

export const getGenre = (state) => {
  return state.FILM.genre;
};

export const getFilms = (state) => {
  return state.DATA.films;
};

export const getGenreList = createSelector(
    getFilms,
    (films) => {
      return Array.from(new Set([`All genres`, ...films.map((film) => film.genre)]));
    }
);

export const getFilteredFilms = createSelector(
    getFilms,
    getGenre,
    (films, genre) => {
      if (genre === GENRE_DEFAULT) {
        return films;
      }

      return films.filter((filmCard) => filmCard.genre === genre);
    }
);

export const getFilmData = (_, props) => {
  return props.filmData;
};

export const getLikeFilms = createSelector(
    getFilms,
    getFilmData,
    (films, filmData) => {
      return films.filter((film) =>
        film.genre === filmData.genre
        && film.id !== filmData.id);
    }
);
