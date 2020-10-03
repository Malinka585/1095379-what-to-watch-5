import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  MOVIE_TITLE: `Hatiko`,
  MOVIE_GENRE: `Drama`,
  MOVIE_YEAR: `2014`
};

ReactDOM.render(
    <App
      movieTitle={Settings.MOVIE_TITLE}
      movieGenre={Settings.MOVIE_GENRE}
      movieYear={Settings.MOVIE_YEAR}
    />,
    document.querySelector(`#root`)
);
