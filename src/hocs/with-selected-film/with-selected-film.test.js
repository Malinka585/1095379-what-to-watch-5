import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import {withSelectedFilm} from "./with-selected-film";
import configurateMockStore from "redux-mock-store";

const filmsDefault = {
  DATA: {
    film: {
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
    },
  },
};

const mockStore = configurateMockStore()(filmsDefault);
mockStore.dispatch = jest.fn();

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withSelectedFilm(MockComponent);

it(`withSelectedFilm is rendered correctly`, () => {
  const tree = renderer.create((
    <Provider store={mockStore}>
      <MockComponentWrapped
      >
        <React.Fragment />
      </MockComponentWrapped>
    </Provider>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
