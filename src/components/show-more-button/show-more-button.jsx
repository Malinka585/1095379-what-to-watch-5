import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const ShowMoreButton = (props) => {
  const {onShowMore} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onShowMore}>Show more</button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onShowMore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onShowMore() {
    dispatch(ActionCreator.addFilmsCount());
  },
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
