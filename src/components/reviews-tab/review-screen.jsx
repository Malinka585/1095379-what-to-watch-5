import React from "react";
import PropTypes from "prop-types";
import {formatDate} from "../../utils/film";

const ReviewScreen = (props) => {
  const {review} = props;
  const {comment, user, rating, date} = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={formatDate(date, `YYYY-M-D`)}>{formatDate(date, `MMMM DD, YYYY`)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

ReviewScreen.propTypes = {
  review: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewScreen;
