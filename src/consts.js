
export const Url = {
  MAIN: `/`,
  SIGN_IN: `/login`,
  MY_LIST: `/mylist`,
  MOVIE: `/films/:id`,
  ADD_REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`,
  LOG_OUT: `/logout`,
  NOT_FOUND: `/404`
};

export const ALL_GENRES_NAME_TAB = `All genres`;

export const FILMS_AMOUNT_PER_STEP = 8;

export const AuthorizationStatus = {
  AUTH: `Auth`,
  NO_AUTH: `NoAuth`,
  INITIAL: `Initial`
};

export const AuthorizationErrorMessage = {
  DEFAULT: ``,
  EMAIL: `Please enter a valid email address or password`
};

export const ApiRoute = {
  FILMS: `/films`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  FAVORITE: `/favorite`,
  PROMO: `/films/promo`,
  COMMENTS: `/comments`
};

export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
