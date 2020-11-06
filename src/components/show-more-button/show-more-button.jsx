import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const ShowMoreButton = (props) => {
  const {addMoreFilms} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          addMoreFilms();
        }}>Show more</button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  addMoreFilms: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addMoreFilms() {
    dispatch(ActionCreator.addFilmsCount());
  },
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
