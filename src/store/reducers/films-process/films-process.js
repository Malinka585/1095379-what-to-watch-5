import {extend} from "../../../utils/redux";
import {ActionType} from "../../action";
import {GENRE_DEFAULT, FILMS_CONT_PER_STEP} from "../../../const";

const initialState = {
  genre: GENRE_DEFAULT,
  filmsCountToShow: FILMS_CONT_PER_STEP,
};

const filmsProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_GENRE:
      return extend(state, {
        genre: action.payload,
        filmsCountToShow: FILMS_CONT_PER_STEP,
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

export {filmsProcess};
