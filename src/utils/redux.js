export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getGenreList = (filmsArray) => {
  return Array.from(new Set([`All genres`, ...filmsArray.map((film) => film.filmGenre)]));
};
