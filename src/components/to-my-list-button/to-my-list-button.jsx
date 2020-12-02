import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";
import {addToFavoritesFilms} from "../../store/api-actions";

const ToMyListButton = (props) => {
  const {authorizationStatus, isFavorite, addToMyList, id} = props;

  return (
    <React.Fragment>
      {authorizationStatus === AuthorizationStatus.AUTH &&
        <button
          className="btn btn--list movie-card__button"
          type="button"
          onClick={() => addToMyList(id, Number(!isFavorite))}
        >
          {isFavorite ?
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg>
            :
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
          }
          <span>My list</span>
        </button>
      }
    </React.Fragment>
  );
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  addToMyList(id, status) {
    dispatch(addToFavoritesFilms(id, status));
  },
});

ToMyListButton.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  addToMyList: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export {ToMyListButton};
export default connect(mapStateToProps, mapDispatchToProps)(ToMyListButton);
