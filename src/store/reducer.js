import {FILMS_AMOUNT_PER_STEP, FiltersType, Genres} from '../consts';
import {ActionType} from './action';
import films from '../mocks/films';
import reviews from '../mocks/reviews';

const initialState = {
  genre: FiltersType.ALL,
  genres: Genres,
  amountFilms: films.length,
  amountShowFilms: FILMS_AMOUNT_PER_STEP,
  films,
  promoMovie: films[0],
  reviews
};

// const filterMovies = (movies, genre) => movies.filter((movie) => movie.genre === genre);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.SHOW_MORE_FILMS:
      return {
        ...state,
        amountShowFilms: state.amountShowFilms + FILMS_AMOUNT_PER_STEP,
      };
    case ActionType.RESET_AMOUNT_SHOW_FILMS:
      return {
        ...state,
        amountShowFilms: FILMS_AMOUNT_PER_STEP,
      };
    case ActionType.CHANGE_AMOUNT_FILMS:
      return {
        ...state,
        amountFilms: action.payload,
      };
    default:
      return {
        ...initialState
      };
  }
};


export {reducer};
