import React from "react";
import renderer from "react-test-renderer";
import {MainScreen} from "./main-screen";

jest.mock(`../user-block/user-block.jsx`, () => `UserBlock`);
jest.mock(`../films-catalog/films-catalog.jsx`, () => `FilmsCatalog`);
jest.mock(`../to-my-list-button/to-my-list-button.jsx`, () => `ToMyListButton`);

const noop = () => {};

const promoFilm = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
  genre: `Comedy`,
  released: 2014,
  isFavorite: false,
};

it(`Should MainScreen render correctly`, () => {
  const tree = renderer
    .create(
        <MainScreen
          onPlayButtonClick={noop}
          promoFilm={promoFilm}
        />

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
