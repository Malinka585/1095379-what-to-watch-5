import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addReview} from "../../store/api-actions";

import {CommentLength} from "../../const";

const {MIN, MAX} = CommentLength;

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor() {
      super();

      this.onFieldChangeHandle = this.onFieldChangeHandle.bind(this);
      this.onSubmitHandle = this.onSubmitHandle.bind(this);

      this.state = {
        rating: ``,
        reviewText: ``,
      };
    }

    onSubmitHandle(evt) {
      evt.preventDefault();
      const {id, postReview} = this.props;
      const {rating, reviewText} = this.state;
      postReview(id, {rating, reviewText});
    }

    onFieldChangeHandle(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {

      const {rating, reviewText} = this.state;
      const isReviewValid = rating && (reviewText.length >= MIN && reviewText.length <= MAX);

      return (
        <Component
          {...this.props}
          isReviewValid={isReviewValid}
          onFieldChange={this.onFieldChangeHandle}
          onSubmit={this.onSubmitHandle}
        />
      );
    }
  }

  WithReviewForm.propTypes = {
    postReview: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  };


  const mapDispatchToProps = (dispatch) => ({
    postReview(id, comment) {
      dispatch(addReview(id, comment));
    },

  });

  return connect(null, mapDispatchToProps)(WithReviewForm);
};

export {withReviewForm};
export default withReviewForm;
