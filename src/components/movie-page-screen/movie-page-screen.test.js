import React from "react";
import renderer from "react-test-renderer";
import {MoviePageScreen} from "./movie-page-screen";
import {BrowserRouter} from "react-router-dom";

jest.mock(`../user-block/user-block.jsx`, () => `UserBlock`);
jest.mock(`../film-detail-tabs/film-detail-tabs.jsx`, () => `FilmDetailTabs`);
jest.mock(`../movie-list/movie-list.jsx`, () => `MovieList`);
jest.mock(`../to-my-list-button/to-my-list-button.jsx`, () => `ToMyListButton`);

const likeFilms = [{
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  previewImage: `img/the-grand-budapest-hotel.jpg`,
  backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
  backgroundColor: `#ffffff`,
  videoLink: `https://some-link`,
  previewVideoLink: `https://some-link`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 8.9,
  scoresCount: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  runTime: 99,
  genre: `Comedy`,
  released: 2014,
  isFavorite: false,
}];

const filmData = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
  genre: `Comedy`,
  released: 2014,
  isFavorite: false,
};

const noop = () => {};


it(`Should MoviePageScreen render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MoviePageScreen
            onPlayButtonClick={noop}
            filmData={filmData}
            likeFilms={likeFilms}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
