import {AuthorizationErrorMessage} from "../consts";

export const ActionType = {
  CHANGE_GENRE: `genre/change`,
  SHOW_MORE_FILMS: `films/showMore`,
  RESET_AMOUNT_SHOW_FILMS: `films/resetAmountShow`,
  CHANGE_AMOUNT_FILMS: `films/changeAmount`,
  LOAD_FILMS: `films/load`,
  LOAD_FILM: `film/load`,
  LOAD_COMMENTS: `comments/load`,
  POST_COMMENT: `comment/post`,
  ACTIVE_FORM: `comment/activeForm`,
  AUTHORIZATION: `site/authorization`,
  AUTHORIZATION_FAILED: `site/authorizationFailed`,
  REDIRECT_TO_ROUTE: `site/redirectToRoute`,
};

export const ActionCreator = {
  changeGenres: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
  }),
  resetAmountShowFilms: () => ({
    type: ActionType.RESET_AMOUNT_SHOW_FILMS,
  }),
  changeAmountFilms: (amount) => ({
    type: ActionType.CHANGE_AMOUNT_FILMS,
    payload: amount,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),
  loadFilm: (film) => ({
    type: ActionType.LOAD_FILM,
    payload: film
  }),
  postComment: () => ({
    type: ActionType.POST_COMMENT,
  }),
  activeForm: (boolean) => ({
    type: ActionType.ACTIVE_FORM,
    payload: boolean
  }),
  authorization: (action) => ({
    type: ActionType.AUTHORIZATION,
    payload: action
  }),
  authorizationFailed: () => ({
    type: ActionType.AUTHORIZATION_FAILED,
    payload: AuthorizationErrorMessage.EMAIL
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
