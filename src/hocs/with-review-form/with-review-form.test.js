import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withReviewForm from "./with-review-form";

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

const MockComponentWrapped = withReviewForm(MockComponent);

it(`withReviewForm is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      onFieldChange={noop}
      onSubmit={noop}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
