import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import PlayerScreen from './player-screen';


const noop = () => {};

it(`PlayerScreen is rendered correctly`, () => {

  const tree = renderer.create(
      <BrowserRouter>
        <PlayerScreen
          onExitPlayerButtonClick={noop}
        >
        </PlayerScreen>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
