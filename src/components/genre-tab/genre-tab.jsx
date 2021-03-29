import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {GenreTabNames, FiltersType} from '../../consts';
import {ActionCreator} from '../../store/action';
import {getFilteredMovies} from '../../utils/common';
import {MOVIES_PROP} from '../../utils/validate';

const GenreTab = ({tab, genre, onChangeGenres, onResetAmountShowFilms, onChangeAmountFilms, films}) => {
  return (
    <li className={`catalog__genres-item ${genre === FiltersType[tab] ? `catalog__genres-item--active` : ``}`}>
      <a href="#" className="catalog__genres-link" onClick={(evt) => {
        evt.preventDefault();
        onResetAmountShowFilms();
        onChangeGenres(FiltersType[tab]);
        onChangeAmountFilms(getFilteredMovies(films, FiltersType[tab]).length);
      }}>{GenreTabNames[tab]}</a>
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

const mapStateToProps = ({genre, films}) => ({
  genre,
  films
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
