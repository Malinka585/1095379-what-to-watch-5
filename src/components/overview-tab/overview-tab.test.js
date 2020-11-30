import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import OverviewTab from './overview-tab';

const film = {
  id: 1,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  scoresCount: 240,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  director: `Wes Andreson`,
  rating: 8.9,
};

it(`OverviewTab is rendered correctly`, () => {

  const tree = renderer.create(
      <BrowserRouter>
        <OverviewTab
          film={film}
        >
        </OverviewTab>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
