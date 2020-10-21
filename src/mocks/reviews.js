import {getRandomInteger, generateFilmRating} from "../utils/common.js";

export const generateFilmComments = () => {
  const comments = [
    `Interesting setting and a good cast`,
    `Booooooooooring`,
    `Very very old. Meh`,
    `Almost two hours? Seriously?`
  ];

  const autors = [
    `Tim Macoveev`,
    `John Doe`,
    `andruuu`,
    `lewa`
  ];

  const commentDates = [
    new Date(2020, 12, 11),
    new Date(2016, 11, 24),
    new Date(2015, 12, 12),
    new Date(2013, 10, 28),
    new Date(2015, 11, 19),
    new Date(2019, 11, 18)
  ];

  const generateComment = () => {
    return comments[getRandomInteger(0, comments.length - 1)];
  };

  const generateCommentAutor = () => {
    return autors[getRandomInteger(0, autors.length - 1)];
  };

  const generateDate = () => {
    return commentDates[getRandomInteger(0, autors.length - 1)];
  };

  const generatefilmComment = () => {
    return {
      comment: generateComment(),
      commentAutor: generateCommentAutor(),
      rating: generateFilmRating(0, 9),
      commentDate: generateDate()
    };
  };

  return new Array(getRandomInteger(1, 5)).fill().map(generatefilmComment);
};
