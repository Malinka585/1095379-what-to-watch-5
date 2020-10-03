import React from "react";
import MainScreen from "../main-screen/main-screen";
import PropTypes from "prop-types";


const App = (props) => {

  const {movieTitle, movieGenre, movieYear} = props;

  return (
    <MainScreen movieTitle={movieTitle}
      movieGenre={movieGenre}
      movieYear={movieYear}/>
  );
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.string.isRequired
};

export default App;
