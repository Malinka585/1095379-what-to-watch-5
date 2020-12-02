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
import withControlPlayer from "../../hocs/width-control-player/width-control-player";
import PrivateRoute from "../private-route/private-route";

const MoviePageScreenWrapped = withSelectedFilm(MoviePageScreen);
const AddReviewScreenWrapped = withSelectedFilm(AddReviewScreen);
const PlayerScreenWrapped = withSelectedFilm(withControlPlayer(PlayerScreen));
const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainScreen
              onPlayButtonClick={(id) => history.push(`/player/${id}`)}
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
          render={({match}) => (
            <AddReviewScreenWrapped
              id={Number(match.params.id)}
            />
          )}
        />
        <Route exact
          path="/player/:id"
          render={({history, match}) => (
            <PlayerScreenWrapped
              onExitButtonClick={(id) => history.push(`/films/${id}`)}
              id={Number(match.params.id)}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
