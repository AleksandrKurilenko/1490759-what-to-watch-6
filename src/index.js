import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from './mocks/films';

const PromoMovie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_YEAR: 2014
};

ReactDOM.render(
    <App
      films={films}
      title={PromoMovie.TITLE}
      genre={PromoMovie.GENRE}
      releaseYear={PromoMovie.RELEASE_YEAR}
    />,
    document.querySelector(`#root`)
);
