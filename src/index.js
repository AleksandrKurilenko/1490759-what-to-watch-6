import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from './mocks/films';

const promoMovie = films[0];

ReactDOM.render(
    <App
      films={films}
      promoMovie={promoMovie}
    />,
    document.querySelector(`#root`)
);
