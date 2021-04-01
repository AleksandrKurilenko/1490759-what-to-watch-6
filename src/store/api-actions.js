import {ActionCreator} from "./action";

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

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => data.map(adaptToClient))
    .then((data) => {
      dispatch(ActionCreator.changeAmountFilms(data.length));
      return dispatch(ActionCreator.loadFilms(data));
    })
);
