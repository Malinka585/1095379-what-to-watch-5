import {FILMS_CONT_PER_STEP} from "../const";

export const ActionType = {
  INCREMENT_GENRE: `INCREMENT_GENRE`,
  INCREMENT_FILM_CARDS: `INCREMENT_FILM_CARDS`,
  RESET_LIST: `RESET_LIST`,
  ADD_FILMS_COUNT: `ADD_FILMS_COUNT`,
};

export const ActionCreator = {
  incrementGenre: (genre) => ({
    type: ActionType.INCREMENT_GENRE,
    payload: genre,
  }),
  incrementFilmsCards: (genre) => ({
    type: ActionType.INCREMENT_FILM_CARDS,
    payload: genre,
  }),
  resetList: () => ({
    type: ActionType.RESET_LIST,
  }),
  addFilmsCount: () => ({
    type: ActionType.ADD_FILMS_COUNT,
    payload: FILMS_CONT_PER_STEP,
  }),
};
