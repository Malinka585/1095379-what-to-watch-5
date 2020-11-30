import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {AuthorizationStatus} from "../../const";

import {UserBlock} from "./user-block";

const {AUTH, NO_AUTH} = AuthorizationStatus;


describe(`Should UserBlock render correctly`, () => {
  it(`AuthorizationStatus auth`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <UserBlock
              authorizationStatus={AUTH}
            />
          </BrowserRouter>

      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`AuthorizationStatus no-auth`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <UserBlock
              authorizationStatus={NO_AUTH}
            />
          </BrowserRouter>

      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
