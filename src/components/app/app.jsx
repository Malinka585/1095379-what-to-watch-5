import React from "react";
import MainScreen from "../main-screen/main-screen";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";


const App = (props) => {

  const {movieTitle, movieGenre, movieYear} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen movieTitle={movieTitle}
            movieGenre={movieGenre}
            movieYear={movieYear}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.string.isRequired
};

export default App;
