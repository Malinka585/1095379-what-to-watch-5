import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import MyListScreen from './my-list-screen';

jest.mock(`../user-block/user-block.jsx`, () => `UserBlock`);

it(`MyListScreen is rendered correctly`, () => {

  const tree = renderer.create(
      <BrowserRouter>
        <MyListScreen/>

      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
