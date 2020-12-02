import {loadFilms,
  loadPromoFilm,
  requireAuthorization,
  redirectToRoute,
  loadFilmReviews,
  loadFilm} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromoFilm(data)))
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => dispatch(loadFilm(data)))
);

export const fetchFilmReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadFilmReviews(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const addReview = (id, {rating, reviewText}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating: Number(rating), comment: reviewText})
    .then(() => dispatch(redirectToRoute(`/films/${id}`)))
);

export const addToFavoritesFilms = (id, status) => (dispatch, _getState, api) => (
  api.post(`favorite/${id}/${status}`)
    .then(() => dispatch(fetchFilmsList()))
    .then(() => dispatch(fetchPromoFilm()))
    .then(() => dispatch(fetchFilm(id)))
);
