export const ActionType = {
  CHANGE_GENRE: `genre/change`,
};

export const ActionCreator = {
  changeGenres: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  })
};
