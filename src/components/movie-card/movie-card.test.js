import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import MovieCard from './movie-card';

const film = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
  genre: `Comedy`,
  released: 2014,
};

const noop = () => {};

it(`MovieCard is rendered correctly`, () => {

  const tree = renderer.create(
      <BrowserRouter>
        <MovieCard
          onFilmCardOver={noop}
          onFilmCardLeave={noop}
          film={film}
        >
          <video/>
        </MovieCard>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
