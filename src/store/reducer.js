import {FiltersType, Genres} from '../consts';
import {ActionType} from './action';
import films from '../mocks/films';
import reviews from '../mocks/reviews';

const initialState = {
  genre: FiltersType.ALL,
  genres: Genres,
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
    default:
      return {
        ...initialState
      };
  }
};


export {reducer};
