import {combineReducers} from "redux";
import {filmsProcess} from "./films-process/films-process";
import {filmsData} from "./films-data/films-data";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  FILM: `FILM`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.FILM]: filmsProcess,
  [NameSpace.USER]: user,
});
