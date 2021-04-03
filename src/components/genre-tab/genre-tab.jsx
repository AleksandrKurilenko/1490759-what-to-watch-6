import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {resetAmountShowFilms} from '../../store/action';
import {getGenresName} from '../../utils/common';
import {MOVIES_PROP} from '../../utils/validate';
import {getActiveGenre, getGenres} from '../../store/genre/selectors';
import {getFilms} from '../../store/films/selectors';


const GenreTab = ({tab, genre, onChangeGenres, resetShowFilmsAmount, films}) => {

  const FiltersType = Object.fromEntries(getGenresName(films));

  return (
    <li className={`catalog__genres-item ${genre === FiltersType[tab] ? `catalog__genres-item--active` : ``}`}>
      <a href="#" className="catalog__genres-link" onClick={(evt) => {
        evt.preventDefault();
        resetShowFilmsAmount();
        onChangeGenres(FiltersType[tab]);
      }}>{FiltersType[tab]}</a>
    </li>
  );
};

GenreTab.propTypes = {
  onChangeGenres: PropTypes.func.isRequired,
  resetShowFilmsAmount: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP).isRequired).isRequired,
  genre: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  genre: getActiveGenre(state),
  films: getFilms(state),
  genres: getGenres(state)
});

const mapDispatchToProps = (dispatch) => ({
  resetShowFilmsAmount() {
    dispatch(resetAmountShowFilms());
  },
});

export {GenreTab};
export default connect(mapStateToProps, mapDispatchToProps)(memo(GenreTab, (prevProps, nextProps) => prevProps.genre === nextProps.genre));
