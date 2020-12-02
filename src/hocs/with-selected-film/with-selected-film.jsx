import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchFilm} from "../../store/api-actions";

const withSelectedFilm = (Component) => {
  class WithSelectedFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
      };

    }


    componentDidMount() {
      const {id, getFilm} = this.props;
      getFilm(id);
    }


    render() {
      const {film} = this.props;
      const {isLoading} = this.state;

      return isLoading ? `` :
        <Component
          {...this.props}
          filmData={film}
        />;
    }
    componentDidUpdate(prevFilm) {
      const prevFilmId = prevFilm.id;
      const {id, getFilm} = this.props;

      this.setState({isLoading: false});

      if (id !== prevFilmId) {
        getFilm(id);
      }
    }
  }

  WithSelectedFilm.propTypes = {
    id: PropTypes.number.isRequired,
    film: PropTypes.object.isRequired,
    getFilm: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({DATA}) => ({
    film: DATA.film,
  });

  const mapDispatchToProps = (dispatch) => ({
    getFilm(id) {
      dispatch(fetchFilm(id));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithSelectedFilm);
};

export {withSelectedFilm};
export default withSelectedFilm;
