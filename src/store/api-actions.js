import {ActionCreator} from "./action";

const adaptToClient = (film) => {
  const adaptedFilm = Object.assign(
      {},
      film,
      {
        posterImage: film.poster_image,
        previeImage: film.preview_image,
        backgroundImage: film.background_image,
        backgroundColor: film.background_color,
        scoresCount: film.scores_count,
        runTime: film.run_time,
        isFavorite: film.is_favorite,
        videoLink: film.video_link,
        previewVideoLink: film.preview_video_link
      }
  );

  return adaptedFilm;
};

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => data.map(adaptToClient))
    .then((data) => {
      dispatch(ActionCreator.changeAmountFilms(data.length));
      return dispatch(ActionCreator.loadFilms(data));
    })
);
