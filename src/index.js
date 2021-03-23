import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from './mocks/films';
import reviews from './mocks/reviews';

const promoMovie = films[0];

ReactDOM.render(
    <App
      films={films}
      reviews={reviews}
      promoMovie={promoMovie}
    />,
    document.querySelector(`#root`)
);
