import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

import {FilmsCatalog} from "./films-catalog";

jest.mock(`../genre-list/genre-list.jsx`, () => `GenreList`);
jest.mock(`../movie-list/movie-list.jsx`, () => `MovieList`);

const filteredFilms = [{
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


describe(`Should FilmsCatalog render correctly`, () => {
  it(`Without ShowMoreButton`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FilmsCatalog
              filteredFilms={filteredFilms}
              filmsCountToShow={4}
            />
          </BrowserRouter>

      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With ShowMoreButton`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FilmsCatalog
              filteredFilms={filteredFilms}
              filmsCountToShow={filteredFilms.length}
            />
          </BrowserRouter>

      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
