import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {resetAmountShowFilms} from '../../store/action';
import {getPromoMovie} from '../../store/films/selectors';
import {MOVIES_PROP} from '../../utils/validate';
import AddFavorite from '../add-favorite/add-favorite';


const PromoMovie = ({promoMovie, resetShowFilmsAmount}) => {

  const {posterImage, name, genre, released, id, isFavorite} = promoMovie;
  const history = useHistory();

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={posterImage} alt={name} width={218} height={327} />
        </div>
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{released}</span>
          </p>
          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button" onClick={() => {
              history.push(`/player/${id}`);
              resetShowFilmsAmount();
            }}>
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button>
            <AddFavorite
              id={id}
              isFavorite={isFavorite}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

PromoMovie.propTypes = {
  promoMovie: PropTypes.shape(MOVIES_PROP).isRequired,
  resetShowFilmsAmount: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  resetShowFilmsAmount() {
    dispatch(resetAmountShowFilms());
  },
});

export {PromoMovie};
export default connect(mapStateToProps, mapDispatchToProps)(PromoMovie);
