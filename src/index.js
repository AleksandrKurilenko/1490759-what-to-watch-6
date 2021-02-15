import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Setting = {
  MOVIES_COUNT: 20
};

const PromoMovie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_YEAR: 2014
};

ReactDOM.render(
    <App
      moviesCount={Setting.MOVIES_COUNT}
      title={PromoMovie.TITLE}
      genre={PromoMovie.GENRE}
      releaseYear={PromoMovie.RELEASE_YEAR}
    />,
    document.querySelector(`#root`)
);
