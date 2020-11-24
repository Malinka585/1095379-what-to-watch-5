import moment from "moment";

export const formatFilmDuration = (runTime) => {
  return moment.utc(moment.duration(runTime, `minutes`).asMilliseconds()).format(`h[h] mm[m]`);
};

export const formatDate = (date, format) => {
  return moment(date).format(format);
};

export const filmLevel = (rating) => {
  const ratingInNumber = Number(rating);
  let level;

  if (ratingInNumber < 3) {
    level = `Bad`;
  } else if (ratingInNumber >= 3 && ratingInNumber < 5) {
    level = `Normal`;
  } else if (ratingInNumber >= 5 && ratingInNumber < 8) {
    level = `Good`;
  } else if (ratingInNumber >= 8 && ratingInNumber < 10) {
    level = `Very good`;
  } else if (ratingInNumber === 10) {
    level = `Awesome`;
  }

  return level;
};

const snakeToCamel = (str) =>
  str.replace(/([-_]\w)/g, (group) =>
    group[1].toUpperCase()
  );

export const snakeToCamelAdapter = (snakeObj) => {
  let camelObj = {};

  Object.entries(snakeObj).forEach((entry) => {
    const renamedEntry = {
      [snakeToCamel(entry[0])]: entry[1]
    };
    Object.assign(camelObj, renamedEntry);
  });

  return camelObj;
};
