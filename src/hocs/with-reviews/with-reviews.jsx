import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchFilmReviews} from "../../store/api-actions";

const withReviews = (Component) => {
  class WithReviews extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      const {id, getReviews} = this.props;
      getReviews(id);
    }

    render() {
      const {reviews} = this.props;
      const {isLoading} = this.state;

      return isLoading ? `` :
        <Component
          {...this.props}
          reviews={reviews}
        />;
    }

    componentDidUpdate(prevFilm) {
      const prevFilmId = prevFilm.id;
      const {id, getReviews} = this.props;

      this.setState({isLoading: false});

      if (id !== prevFilmId) {
        getReviews(id);
      }
    }
  }

  WithReviews.propTypes = {
    id: PropTypes.number.isRequired,
    reviews: PropTypes.array.isRequired,
    getReviews: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({DATA}) => ({
    reviews: DATA.reviews,
  });

  const mapDispatchToProps = (dispatch) => ({
    getReviews(id) {
      dispatch(fetchFilmReviews(id));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReviews);
};

export {withReviews};
export default withReviews;
