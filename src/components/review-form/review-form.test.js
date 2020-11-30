import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import ReviewForm from './review-form';


const noop = () => {};

it(`ReviewForm is rendered correctly`, () => {

  const tree = renderer.create(
      <BrowserRouter>
        <ReviewForm
          onFieldChange={noop}
          onSubmit={noop}
        >
        </ReviewForm>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
