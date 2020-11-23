import React from "react";
import PropTypes from "prop-types";
import ReviewScreen from "./review-screen";

const ReviewsTab = (props) => {
  const {reviews} = props;

  const leftColReviews = reviews.filter((_, index) => index % 2 === 0);
  const rightColReviews = reviews.filter((_, index) => index % 2 !== 0);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {leftColReviews.map((review) => (
          <ReviewScreen
            key ={`${review.id}`}
            review={review}/>
        ))}
      </div>
      <div className="movie-card__reviews-col">
        {rightColReviews.map((review) => (
          <ReviewScreen
            key ={`${review.id}`}
            review={review}/>
        ))}
      </div>
    </div>
  );
};

ReviewsTab.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsTab;
