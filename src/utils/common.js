import {ALL_GENRES_NAME_TAB} from "../consts";

export const getDuration = (duration) => {
  return {
    hour: Math.trunc(duration / 60),
    minutes: Math.trunc(duration % 60),
    seconds: Math.trunc((duration * 60) % 60)
  };
};

export const getRemainedDuration = (duration) => {
  duration = duration / 60;
  return {
    hour: Math.trunc(duration / 60),
    minutes: Math.trunc(duration % 60),
    seconds: Math.trunc((duration * 60) % 60)
  };
};

export const getFilteredMovies = (movies, genre) => genre === ALL_GENRES_NAME_TAB ? movies : movies.filter((movie) => movie.genre === genre);

export const getGenresName = (films) => {
  const genres = new Map();
  genres.set(ALL_GENRES_NAME_TAB, ALL_GENRES_NAME_TAB);

  films.forEach((film) => {
    genres.set(film.genre, film.genre);
  });

  return genres;
};
