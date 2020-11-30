import React from "react";
import renderer from "react-test-renderer";
import DetailsTab from "./details-tab.jsx";

const film = {
  id: 1,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  runTime: 99,
  genre: `Comedy`,
  released: 2014,
};

it(`Should DetailsTab render correctly`, () => {
  const tree = renderer
    .create(
        <DetailsTab
          film={film}
        />

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
