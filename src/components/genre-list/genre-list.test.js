import React from "react";
import renderer from "react-test-renderer";
import {GenreList} from "./genre-list";

const genreList = [
  `All genres`,
  `Comedy`
];

const noop = () => {};


describe(`Should GenreList render correctly`, () => {
  it(`With All genres`, () => {
    const tree = renderer
      .create(
          <GenreList
            genreList={genreList}
            genre={`All genres`}
            onClick={noop}
            changeGenre={noop}
          />

      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With Comedy`, () => {
    const tree = renderer
      .create(
          <GenreList
            genreList={genreList}
            genre={`Comedy`}
            onClick={noop}
            changeGenre={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
