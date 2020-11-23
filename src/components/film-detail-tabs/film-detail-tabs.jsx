import React from "react";
import PropTypes from "prop-types";
import OverviewTab from "../overview-tab/overview-tab";
import ReviewsTab from "../reviews-tab/reviews-tab";
import DetailsTab from "../details-tab/details-tab";
import {TabsHeaders} from "../../const";
import withReviews from "../../hocs/with-reviews/with-reviews";

const ReviewsTabWrapped = withReviews(ReviewsTab);
const renderTabsPage = (activeTab, film) => {

  switch (activeTab) {
    case TabsHeaders.OVERVIEW:
      return <OverviewTab film={film}/>;
    case TabsHeaders.DETAILS:
      return <DetailsTab film={film}/>;
    case TabsHeaders.REVIEWS:
      return <ReviewsTabWrapped id={film.id}/>;
    default:
      return (
        <h1>
          404.
          <br/>
          <small>Page not found</small>
        </h1>
      );
  }
};

const FilmDetailTabs = (props) => {

  const {activeTab, onTabClick, film} = props;

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(TabsHeaders).map((value) => {
            return (
              <li key ={`${value}`}
                className={`movie-nav__item ${activeTab === value ? `movie-nav__item--active` : ``}`}>
                <a
                  className="movie-nav__link"
                  onClick={() => onTabClick(value)}>{value}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {renderTabsPage(activeTab, film)}
    </React.Fragment>
  );
};

FilmDetailTabs.propTypes = {
  film: PropTypes.object.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default FilmDetailTabs;
