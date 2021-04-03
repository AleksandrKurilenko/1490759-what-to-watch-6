import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import UserBlock from '../user-block/user-block';
import {resetAmountShowFilms} from '../../store/action';
import {getPromoMovie} from '../../store/films/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import PromoMovie from '../promo-movie/promo-movie';
import {fetchPromoFilm} from '../../store/api-actions';
import {MOVIES_NOT_REQUIRE_PROP} from '../../utils/validate';

const Header = ({promoMovie, loadPromoFilm}) => {
  useEffect(() => {
    if (promoMovie === null) {
      loadPromoFilm();
    }
  }, [promoMovie]);

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        {promoMovie !== null ? <img src={promoMovie.backgroundImage} alt={promoMovie.name} /> : ``}
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <UserBlock />
      </header>
      {promoMovie !== null ? <PromoMovie /> : <LoadingScreen />}
    </section>
  );
};

Header.propTypes = {
  loadPromoFilm: PropTypes.func.isRequired,
  promoMovie: PropTypes.shape(MOVIES_NOT_REQUIRE_PROP),

};


const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state)
});

const mapDispatchToProps = (dispatch) => ({
  resetShowFilmsAmount() {
    dispatch(resetAmountShowFilms());
  },
  loadPromoFilm() {
    dispatch(fetchPromoFilm());
  }
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
