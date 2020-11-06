import {extend, getGenreList} from "../utils/redux";
import {ActionType} from "./action";
import films from "../mocks/films";
import {GENRE_DEFAULT} from "../const";

const initialState = {
  genreList: getGenreList(films),
  genre: GENRE_DEFAULT,
  filteredFilmCards: films,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_GENRE:
      return extend(state, {
        genre: action.payload,
      });
    case ActionType.INCREMENT_FILM_CARDS:
      return extend(state, {
        filteredFilmCards: films.filter((filmCard) => filmCard.filmGenre === action.payload),
      });

    case ActionType.RESET_LIST:
      return extend({}, initialState);
  }

  return state;
};
export {reducer};
