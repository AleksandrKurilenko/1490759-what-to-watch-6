import {FiltersType} from "../consts";

export const getDuration = (duration) => {
  return {
    hour: Math.trunc(duration / 60),
    minutes: duration % 60,
    seconds: (duration * 60) % 60
  };
};

export const getFilteredMovies = (movies, genre) => genre === FiltersType.ALL ? movies : movies.filter((movie) => movie.genre === genre);
