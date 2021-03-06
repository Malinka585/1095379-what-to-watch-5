import React from "react";
import ReviewForm from "../review-form/review-form";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import withReviewForm from "../../hocs/with-review-form/with-review-form";
import UserBlock from "../user-block/user-block";

const ReviewFormWrapped = withReviewForm(ReviewForm);

const AddReviewScreen = (props) => {
  const {film} = props;
  const {name, backgroundImage, posterImage, id} = film;


  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link className="logo__link" to={`/`}>
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/${id}`}>{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewFormWrapped id={id} />
      </div>
    </section>
  );
};

AddReviewScreen.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default AddReviewScreen;
