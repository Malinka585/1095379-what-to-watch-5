import React from "react";
import renderer from "react-test-renderer";
import AddReviewScreen from "./add-review-screen";
import {BrowserRouter} from "react-router-dom";

jest.mock(`../user-block/user-block.jsx`, () => `UserBlock`);

const film = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
};

it(`Should AddReviewScreen render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <AddReviewScreen
            film={film}
          />
        </BrowserRouter>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
