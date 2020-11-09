import React, {PureComponent} from "react";

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
    }

    onFieldChangeHandle(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {

      return (
        <Component
          {...this.props}
          onFieldChange={this.onFieldChangeHandle}
          onSubmit={this.onSubmitHandle}
        />
      );
    }
  }

  return WithReviewForm;
};

export default withReviewForm;
