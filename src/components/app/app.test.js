import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import App from "./app";
import configurateMockStore from "redux-mock-store";

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

const mockStore = configurateMockStore()(filmsDefault);


it(`Render App`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <App/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
