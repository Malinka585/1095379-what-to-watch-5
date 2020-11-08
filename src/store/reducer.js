import {extend, getGenreList} from "../utils/redux";
import {ActionType} from "./action";
import films from "../mocks/films";
import {GENRE_DEFAULT, FILMS_CONT_PER_STEP} from "../const";

const initialState = {
  genreList: getGenreList(films),
  genre: GENRE_DEFAULT,
  filteredFilmCards: films,
  filmsCountToShow: FILMS_CONT_PER_STEP,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_GENRE:
      return extend(state, {
        genre: action.payload,
        filmsCountToShow: FILMS_CONT_PER_STEP,
      });
    case ActionType.INCREMENT_FILM_CARDS:
      return extend(state, {
        filteredFilmCards: films.filter((filmCard) => filmCard.filmGenre === action.payload),
      });

    case ActionType.RESET_LIST:
      return extend({}, initialState);

    case ActionType.ADD_FILMS_COUNT:
      return extend(state, {
        filmsCountToShow: state.filmsCountToShow + action.payload,
      });
  }

  return state;
};
export {reducer};
