import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {getFilteredMovies, getGenres} from '../../utils/common';
import {MOVIES_PROP} from '../../utils/validate';

const GenreTab = ({tab, genre, onChangeGenres, onResetAmountShowFilms, onChangeAmountFilms, films}) => {
  const FiltersType = Object.fromEntries(getGenres(films));
  return (
    <li className={`catalog__genres-item ${genre === FiltersType[tab] ? `catalog__genres-item--active` : ``}`}>
      <a href="#" className="catalog__genres-link" onClick={(evt) => {
        evt.preventDefault();
        onResetAmountShowFilms();
        onChangeGenres(FiltersType[tab]);
        onChangeAmountFilms(getFilteredMovies(films, FiltersType[tab]).length);
      }}>{FiltersType[tab]}</a>
    </li>
  );
};

GenreTab.propTypes = {
  onChangeGenres: PropTypes.func.isRequired,
  onResetAmountShowFilms: PropTypes.func.isRequired,
  onChangeAmountFilms: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP).isRequired).isRequired,
  genre: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired
};

const mapStateToProps = ({genre, films, genres}) => ({
  genre,
  films,
  genres,
});

const mapDispatchToProps = (dispatch) => ({
  onResetAmountShowFilms() {
    dispatch(ActionCreator.resetAmountShowFilms());
  },
  onChangeAmountFilms(amount) {
    dispatch(ActionCreator.changeAmountFilms(amount));
  }
});

export {GenreTab};
export default connect(mapStateToProps, mapDispatchToProps)(GenreTab);
