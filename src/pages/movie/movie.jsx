import React from 'react';
import PropTypes from 'prop-types';
import {Link, useHistory} from 'react-router-dom';
import MoviesList from '../../components/movies-list/movies-list';
import {MoviesAmmount, Urls} from '../../consts';
import {MOVIES_PROP, REVIEW_PROP} from '../../utils/validate';
import MovieTabs from '../../components/movie-tabs/movie-tabs';
import {connect} from 'react-redux';

const getSimilarMovies = (films, genre, name) => films.filter((film) => film.genre === genre && film.name !== name);


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


const Movie = ({film, reviews, films}) => {

  const {
    backgroundImage,
    name,
    genre,
    released,
    posterImage,
    id
  } = film;

  const history = useHistory();

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
              <Link to={Urls.MAIN} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </div>
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => history.push(`/player/${id}`)}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button" onClick={() => history.push(Urls.MY_LIST)}>
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
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
                reviews={reviews}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList
            films={getSimilarMovies(films, genre, name)}
            maxFilms={MoviesAmmount.MOVIE_PAGE}
          />
        </section>
        <footer className="page-footer">
          <div className="logo">
            <Link to={Urls.MAIN} className="logo__link logo__link--light">
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
  reviews: PropTypes.arrayOf(PropTypes.shape(REVIEW_PROP)).isRequired
};


const mapStateToProps = ({films}) => ({
  films,
});

export {Movie};
export default connect(mapStateToProps, null)(Movie);
