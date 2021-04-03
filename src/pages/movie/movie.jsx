import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MoviesList from '../../components/movies-list/movies-list';
import UserBlock from '../../components/user-block/user-block';
import MovieTabs from '../../components/movie-tabs/movie-tabs';
import {connect} from 'react-redux';
import {AuthorizationStatuses, Url} from '../../consts';
import AddFavorite from '../../components/add-favorite/add-favorite';
import {MOVIES_PROP, REVIEW_PROP} from '../../utils/validate';
import {getSimmilarMoviesWithGenre} from '../../store/films/selectors';
import {getAuthorizationStatus} from '../../store/auth/selectors';
import {getReviews} from '../../store/comment/selectors';
import {fetchComments} from '../../store/api-actions';


// const FilmRatings = {
//   Bad: {
//     DESCRIPTION: `Bad`,
//     RATING: 0
//   },
//   Normal: {
//     DESCRIPTION: `Normal`,
//     RATING: 3
//   },
//   Good: {
//     DESCRIPTION: `Good`,
//     RATING: 5
//   },
//   VeryGood: {
//     DESCRIPTION: `Very Good`,
//     RATING: 8
//   },
//   Awesome: {
//     DESCRIPTION: `Awesome`,
//     RATING: 10
//   }
// };

// const getDescriptionRating = (rating) => {
//   if (rating < FilmRatings.Normal.RATING) {
//     return FilmRatings.Bad.DESCRIPTION;
//   } else if (rating >= FilmRatings.Normal.RATING && rating < FilmRatings.Good.RATING) {
//     return FilmRatings.Normal.DESCRIPTION;
//   } else if (rating >= FilmRatings.Good.RATING && rating < FilmRatings.VeryGood.RATING) {
//     return FilmRatings.Good.DESCRIPTION;
//   } else if (rating >= FilmRatings.VeryGood.RATING && rating < FilmRatings.Awesome.RATING) {
//     return FilmRatings.VeryGood.DESCRIPTION;
//   }

//   return FilmRatings.Awesome.RATING;
// };


const Movie = ({film, reviews, films, onPlayMovie, authorizationStatus, loadComments}) => {

  const {
    backgroundImage,
    name,
    genre,
    released,
    posterImage,
    id,
    isFavorite
  } = film;

  useEffect(() => {
    if (reviews[id] === undefined) {
      loadComments(id);
    }
  }, [reviews]);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={Url.MAIN} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
            <UserBlock />
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayMovie()}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <AddFavorite
                  id={id}
                  isFavorite={isFavorite}
                />
                {authorizationStatus === AuthorizationStatuses.AUTH
                  ? <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
                  : ``
                }
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <MovieTabs
                film={film}
                reviews={reviews[id]}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {films.length !== 0 ? <MoviesList
            films={films}
          /> : ``}
        </section>
        <footer className="page-footer">
          <div className="logo">
            <Link to={Url.MAIN} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Movie.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP)).isRequired,
  film: PropTypes.shape(MOVIES_PROP).isRequired,
  reviews: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape(REVIEW_PROP))),
  onPlayMovie: PropTypes.func.isRequired,
  loadComments: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};


const mapStateToProps = (state) => ({
  films: getSimmilarMoviesWithGenre(state),
  authorizationStatus: getAuthorizationStatus(state),
  reviews: getReviews(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(fetchComments(id));
  },
});

export {Movie};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
