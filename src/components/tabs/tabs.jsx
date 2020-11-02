import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OverviewTab from "../overview-tab/overview-tab";
import ReviewsTab from "../reviews-tab/reviews-tab";
import DetailsTab from "../details-tab/details-tab";

const TabsHeaders = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export default class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.onTabClickHandle = this.onTabClickHandle.bind(this);

    this.state = {
      activeTab: TabsHeaders.OVERVIEW
    };
  }

  onTabClickHandle(value) {
    this.setState({activeTab: value});
  }

  renderTabsPage() {
    const {activeTab} = this.state;
    const {film} = this.props;

    switch (activeTab) {
      case TabsHeaders.OVERVIEW:
        return <OverviewTab film={film}/>;
      case TabsHeaders.DETAILS:
        return <DetailsTab film={film}/>;
      case TabsHeaders.REVIEWS:
        return <ReviewsTab reviews={film.filmComments}/>;
      default:
        return (
          <h1>
            404.
            <br/>
            <small>Page not found</small>
          </h1>
        );
    }
  }

  render() {
    const {activeTab} = this.state;

    return (
      <React.Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {Object.values(TabsHeaders).map((value, i) => {
              return (
                <li key ={`${i}`}
                  className={`movie-nav__item ${activeTab === value ? `movie-nav__item--active` : ``}`}>
                  <a
                    className="movie-nav__link"
                    onClick={() => this.onTabClickHandle(value)}>{value}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        {this.renderTabsPage()}
      </React.Fragment>
    );
  }
}

Tabs.propTypes = {
  film: PropTypes.object.isRequired,
};

