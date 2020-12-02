import React from "react";
import renderer from "react-test-renderer";
import AddReviewScreen from "./add-review-screen";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';

jest.mock(`../review-form/review-form.jsx`, () => `ReviewForm`);
jest.mock(`../user-block/user-block.jsx`, () => `UserBlock`);

const film = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
};

const filmsDefault = {
  DATA: {
    films: [{
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
    }],
    promoFilm: {
      id: 1,
      name: `The Grand Budapest Hotel`,
      posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
      backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
      genre: `Comedy`,
      released: 2014,
    },
  },

  FILM: {
    filmsCountToShow: 8,
  },

  USER: {
    authorizationStatus: `NO_AUTH`,
  }

};


const mockStore = configureMockStore()(filmsDefault);

it(`Should AddReviewScreen render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <BrowserRouter>
            <AddReviewScreen
              film={film}
            />
          </BrowserRouter>
        </Provider>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
