import {generateFilmComments} from "./reviews.js";
import {getRandomInteger, getRandomArrayElements, generateId, generateRating} from "../utils/common.js";

const MIN_RUN_TIME = 60;
const FILMS_COUNT = 58;

const generateName = () => {
  const name = [
    `Fantastic Beasts: The Crimes of Grindelwald`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`,
    `We need to talk about Kevin`,
    `What We Do in the Shadows`,
    `Revenant`
  ];

  const randomIndex = getRandomInteger(0, name.length - 1);

  return name[randomIndex];
};

const generatePosterImage = () => {
  const posterImage = [
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

  const randomIndex = getRandomInteger(0, posterImage.length - 1);

  return posterImage[randomIndex];
};

const generateDescription = () => {
  const descriptions = [
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

  return getRandomArrayElements(descriptions, 5);
};

const generateRunTime = () => {
  return getRandomInteger(MIN_RUN_TIME, MIN_RUN_TIME * 3);
};

const generateGenre = () => {
  const genres = [`Drama`, `Mystery`, `Film-Noir`, `Musical`, `Western`, `Comedy`, `Cartoon`];

  const randomIndex = getRandomInteger(0, genres.length - 1);

  return genres[randomIndex];
};

const generateDirector = () => {
  const director = [`Anthony Mann`, `Quentin Jerome Tarantino`, `Timur Bekmambetov`, `Tim Burton`];

  const randomIndex = getRandomInteger(0, director.length - 1);

  return director[randomIndex];
};

const generateStarring = () => {
  const starring = [
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

  return getRandomArrayElements(starring, starring.length);
};

const generateReleased = () => {
  const released = [
    `2015`,
    `2016`,
    `2011`,
    `1986`,
    `2020`
  ];

  const randomIndex = getRandomInteger(0, released.length - 1);

  return released[randomIndex];
};

const generateFilm = () => {

  return {
    id: generateId(),
    backGroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    posterImage: generatePosterImage(),
    previewImage: `img/the-grand-budapest-hotel.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://some-link`,
    name: generateName(),
    genre: generateGenre(),
    released: generateReleased(),
    description: generateDescription().join(`, `),
    rating: generateRating(0, 9),
    director: generateDirector(),
    starring: generateStarring(),
    runTime: generateRunTime(),
    filmComments: generateFilmComments(),
    scoresCount: `125`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};

const generateFilms = (count) => {
  return new Array(count).fill().map(generateFilm);
};

export default generateFilms(FILMS_COUNT);

