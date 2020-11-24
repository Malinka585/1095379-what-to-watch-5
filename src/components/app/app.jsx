import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import MoviePageScreen from "../movie-page-screen/movie-page-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";
import browserHistory from "../../browser-history";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import withSelectedFilm from "../../hocs/with-selected-film/with-selected-film";

const MoviePageScreenWrapped = withSelectedFilm(MoviePageScreen);
const App = (props) => {

  const {films} = props;
  const film = films[5];

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainScreen
              onPlayButtonClick={() => history.push(`/player/:id`)}
            />
          )}
        />
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen />
        </Route>
        <Route exact
          path="/films/:id"
          render={({history, match}) => (
            <MoviePageScreenWrapped
              onPlayButtonClick={(id) => history.push(`/player/${id}`)}
              id={Number(match.params.id)}
            />
          )}
        />
        <Route exact path="/films/:id/review">
          <AddReviewScreen
            film={film}/>
        </Route>
        <Route exact
          path="/player/:id"
          render={({history}) => (
            <PlayerScreen onExitPlayerButtonClick={() => history.push(`/films/:id`)}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films,
});

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export {App};
export default connect(mapStateToProps)(App);
