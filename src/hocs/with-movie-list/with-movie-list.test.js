import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withMovieList from "./with-movie-list";

const noop = () => {};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withMovieList(MockComponent);

it(`withMovieList is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      activeCard={0}
      onFilmCardOver={noop}
      onFilmCardLeave={noop}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
