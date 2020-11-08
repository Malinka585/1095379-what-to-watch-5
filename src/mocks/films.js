import {generateFilmComments} from "./reviews.js";
import {getRandomInteger, getRandomArrayElements, generateId, generateFilmRating} from "../utils/common.js";

const MIN_FILM_DURATION = 60;
const FILMS_COUNT = 58;

const generatefilmTitle = () => {
  const filmTitles = [
    `Fantastic Beasts: The Crimes of Grindelwald`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`,
    `We need to talk about Kevin`,
    `What We Do in the Shadows`,
    `Revenant`
  ];

  const randomIndex = getRandomInteger(0, filmTitles.length - 1);

  return filmTitles[randomIndex];
};

const generatefilmPoster = () => {
  const filmPosters = [
    `img/bohemian-rhapsody.jpg`,
    `img/dardjeeling-limited.jpg`,
    `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    `img/johnny-english.jpg`,
    `img/macbeth.jpg`,
    `img/midnight-special.jpg`,
    `img/mindhunter.jpg`,
    `img/moonrise-kingdom.jpg`,
    `img/no-country-for-old-men.jpg`
  ];

  const randomIndex = getRandomInteger(0, filmPosters.length - 1);

  return filmPosters[randomIndex];
};

const generateFilmDescription = () => {
  const filmDescriptions = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ];

  return getRandomArrayElements(filmDescriptions, 5);
};

const generateFilmDuration = () => {
  return getRandomInteger(MIN_FILM_DURATION, MIN_FILM_DURATION * 3);
};

const generatefilmGenre = () => {
  const filmGenres = [`Drama`, `Mystery`, `Film-Noir`, `Musical`, `Western`, `Comedy`, `Cartoon`];

  const randomIndex = getRandomInteger(0, filmGenres.length - 1);

  return filmGenres[randomIndex];
};

const generateFilmRegisseur = () => {
  const filmRegisseurs = [`Anthony Mann`, `Quentin Jerome Tarantino`, `Timur Bekmambetov`, `Tim Burton`];

  const randomIndex = getRandomInteger(0, filmRegisseurs.length - 1);

  return filmRegisseurs[randomIndex];
};

const generateFilmActors = () => {
  const filmActors = [
    `Aamir Khan`,
    `Akshay Kumar`,
    `Ajay Devgn`,
    `Amjad Khan`,
    `Amitabh Bachchan`,
    `Abhay Deol`,
    `Arshad Warsi`,
    `Anushka Shetty`,
    `Aruna Irani`
  ];

  return getRandomArrayElements(filmActors, filmActors.length);
};

const generateFilmDate = () => {
  const filmDates = [
    `2015`,
    `2016`,
    `2011`,
    `1986`,
    `2020`
  ];

  const randomIndex = getRandomInteger(0, filmDates.length - 1);

  return filmDates[randomIndex];
};

const generateFilm = () => {

  return {
    id: generateId(),
    filmBackGround: `img/bg-the-grand-budapest-hotel.jpg`,
    filmPoster: generatefilmPoster(),
    filmTitle: generatefilmTitle(),
    filmGenre: generatefilmGenre(),
    filmDate: generateFilmDate(),
    filmDescription: generateFilmDescription().join(`, `),
    filmRating: generateFilmRating(0, 9),
    filmRegisseur: generateFilmRegisseur(),
    filmActors: generateFilmActors(),
    filmDuration: generateFilmDuration(),
    filmComments: generateFilmComments(),
    voiceCount: `125`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    isInwatchlist: Boolean(getRandomInteger(0, 1))
  };
};

const generateFilms = (count) => {
  return new Array(count).fill().map(generateFilm);
};

export default generateFilms(FILMS_COUNT);

