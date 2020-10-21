export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomArrayElements = (array, count) => {
  const randomArray = [];

  for (let i = 0; i <= getRandomInteger(0, count); i++) {
    const randomIndex = getRandomInteger(0, array.length - 1);
    randomArray.push(array[randomIndex]);
  }

  return randomArray;
};

export const generateFilmRating = (min, max) => {
  let rand = min - 0.1 + Math.random() * (max - min + 1);
  return rand.toFixed(1);
};


export const generateDate = () => {
  const maxDaysGap = 365 * 50;
  const daysGap = getRandomInteger(0, maxDaysGap);
  const currentDate = new Date();

  currentDate.setHours(23, 59, 59, 999);

  currentDate.setDate(currentDate.getDate() - daysGap);

  return new Date(currentDate);
};

export const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);
