import React from "react";
import renderer from "react-test-renderer";
import FilmDetailTabs from "./film-detail-tabs";

const noop = () => {};

const film = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
  genre: `Comedy`,
  released: 2014,
};

it(`Should FilmDetailTabs render correctly`, () => {
  const tree = renderer
    .create(
        <FilmDetailTabs
          activeTab={`All genres`}
          onTabClick={noop}
          film={film}
        />

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
