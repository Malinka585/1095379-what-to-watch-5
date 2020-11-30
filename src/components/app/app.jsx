import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import MoviePageScreen from "../movie-page-screen/movie-page-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";
import browserHistory from "../../browser-history";
import withSelectedFilm from "../../hocs/with-selected-film/with-selected-film";
import PrivateRoute from "../private-route/private-route";

const MoviePageScreenWrapped = withSelectedFilm(MoviePageScreen);
const App = () => {

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
        <Route
          exact
          path="/login"
          render={() => (
            <SignInScreen />
          )}
        />
        <PrivateRoute
          exact
          path="/mylist"
          render={() => (
            <MyListScreen />
          )}
        />
        <Route exact
          path="/films/:id"
          render={({history, match}) => (
            <MoviePageScreenWrapped
              onPlayButtonClick={(id) => history.push(`/player/${id}`)}
              id={Number(match.params.id)}
            />
          )}
        />
        <PrivateRoute
          exact
          path="/films/:id/review"
          render={() => (
            <AddReviewScreen
            />
          )}
        />
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

export default App;
