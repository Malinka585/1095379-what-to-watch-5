import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {SignInScreen} from "./sign-in-screen.jsx";

const noop = () => {};

it(`SignInScreen is rendered correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <SignInScreen
            onSubmit={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
