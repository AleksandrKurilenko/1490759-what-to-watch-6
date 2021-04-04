import {AuthorizationStatuses, Url} from "../consts";
import {loadFilm, loadFilms, redirectToRoute, postComment, authorization, loadFavoriteFilms, addFavoriteFilmsList, removeFavoriteFilmsList, loadPromoFilm, loadGenres, loadComments} from "./action";
import browserHistory from "../browser-history";


const Routes = {
  FILMS: `/films`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  FAVORITE: `/favorite`,
  PROMO: `/films/promo`
};

const adaptToClient = (film) => {
  const adaptedFilm = {
    name: film.name,
    posterImage: film.poster_image,
    previeImage: film.preview_image,
    backgroundImage: film.background_image,
    backgroundColor: film.background_color,
    description: film.description,
    rating: film.rating,
    scoresCount: film.scores_count,
    director: film.director,
    starring: film.starring,
    runTime: film.run_time,
    genre: film.genre,
    released: film.released,
    id: film.id,
    isFavorite: film.is_favorite,
    videoLink: film.video_link,
    previewVideoLink: film.preview_video_link
  };

  return adaptedFilm;
};

const adaptToServer = (comment) => {
  const adaptedComment = {
    comment: comment.text
  };

  return adaptedComment;
};

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(Routes.FILMS)
    .then(({data}) => data.map(adaptToClient))
    .then((data) => {
      dispatch(loadGenres(data));
      return dispatch(loadFilms(data));
    })
);

export const fetchFavoriteFilmsList = () => (dispatch, _getState, api) => (
  api.get(Routes.FAVORITE)
    .then(({data}) => data.map(adaptToClient))
    .then((data) => dispatch(loadFavoriteFilms(data)))
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => adaptToClient(data))
    .then((data) => dispatch(loadFilm(data)))
    .catch(() => dispatch(redirectToRoute(Url.NOT_FOUND)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(Routes.PROMO)
    .then(({data}) => adaptToClient(data))
    .then((data) => dispatch(loadPromoFilm(data)))
    .catch(() => {})
);

export const fetchComments = (filmID) => (dispatch, _getState, api) => (
  api.get(`/comments/${filmID}`)
    .then(({data}) => dispatch(loadComments(data, filmID)))
    .catch(() => {})
);

export const addComment = (id, comment) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, adaptToServer(comment))
    .then(({data}) => dispatch(postComment(data, id)))
    .then(() => dispatch(redirectToRoute(`/films/${id}`)))
    .catch(() => { })
);

export const addFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => adaptToClient(data))
    .then((data) => {
      return status === 1 ? dispatch(addFavoriteFilmsList(data)) : dispatch(removeFavoriteFilmsList(data.id));
    })
    .catch(() => dispatch(redirectToRoute(Url.SIGN_IN)))
);

export const checkLogin = () => (dispatch, _getState, api) => (
  api.get(Routes.LOGIN)
    .then(() => dispatch(authorization(AuthorizationStatuses.AUTH)))
    .catch(() => { })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(Routes.LOGIN, {email, password})
    .then(() => dispatch(authorization(AuthorizationStatuses.AUTH)))
    .then(() => dispatch(redirectToRoute(Url.MAIN)))
    .catch(() => { })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(Routes.LOGOUT)
    .then(() => dispatch(authorization(AuthorizationStatuses.NO_AUTH)))
    .then(() => {
      if (browserHistory.location.pathname !== Url.MAIN) {
        dispatch(redirectToRoute(Url.MAIN));
      }
    })
);
