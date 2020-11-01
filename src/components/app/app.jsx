import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import MoviePageScreen from "../movie-page-screen/movie-page-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";
import PropTypes from "prop-types";


const App = (props) => {

  const {films} = props;
  const film = films[3];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainScreen
              onPlayButtonClick={() => history.push(`/player/:id`)}
              films={films}/>
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
          render={({history}) => (
            <MoviePageScreen
              onPlayButtonClick={() => history.push(`/player/:id`)}
              film={film}
              films={films}
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

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;
