import {createSelector} from 'reselect';
import {getFilteredMovies} from '../../utils/common';
import {getActiveGenre} from '../genre/selectors';
import {NameSpace} from '../main-reducer';

const MAX_AMMOUNT_SIMILLAR_FILMS = 4;
const getSimilarMovies = (films, genre, name) => films.filter((film) => film.genre === genre && film.name !== name).slice(0, MAX_AMMOUNT_SIMILLAR_FILMS);

export const getFilms = (state) => state[NameSpace.FILMS].films;
export const getFavoriteFilms = (state) => state[NameSpace.FILMS].favoriteFilms;
export const getAmountShowFilms = (state) => state[NameSpace.FILMS].amountShowFilms;
export const getLoadedFilm = (state) => state[NameSpace.FILMS].loadedFilm;
export const getPromoMovie = (state) => state[NameSpace.FILMS].promoMovie;
export const getActiveFilmGenre = (state) => state[NameSpace.FILMS].activeFilmGenre;
export const getActiveFilmName = (state) => state[NameSpace.FILMS].activeFilmName;

export const getFilmsWithGenre = createSelector(
    getFilms,
    getActiveGenre,
    (films, genre) => getFilteredMovies(films, genre)
);

export const getMinimalShowFilms = createSelector(
    getFilmsWithGenre,
    getAmountShowFilms,
    (films, amount) => films.slice(0, amount)
);

export const getSimmilarMoviesWithGenre = createSelector(
    getFilms,
    getActiveFilmGenre,
    getActiveFilmName,
    (films, genre, name) => getSimilarMovies(films, genre, name)
);

export const renderShowMoreButton = createSelector(
    getFilmsWithGenre,
    getAmountShowFilms,
    (films, amountShowFilms) => amountShowFilms < films.length
);
