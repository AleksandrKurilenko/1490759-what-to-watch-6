export const ActionType = {
  CHANGE_GENRE: `genre/change`,
  SHOW_MORE_FILMS: `films/showMore`,
  RESET_AMOUNT_SHOW_FILMS: `films/resetAmountShow`,
  CHANGE_AMOUNT_FILMS: `films/changeAmount`
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
  })
};
