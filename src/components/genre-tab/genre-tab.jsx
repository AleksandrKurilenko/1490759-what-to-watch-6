import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Genres, FiltersType} from '../../consts';

const GenreTab = ({tab, genre, onChangeGenres}) => {
  return (
    <li className={`catalog__genres-item ${genre === FiltersType[tab] ? `catalog__genres-item--active` : ``}`}>
      <a href="#" className="catalog__genres-link" onClick={(evt) => {
        evt.preventDefault();
        onChangeGenres(FiltersType[tab]);
      }}>{Genres[tab]}</a>
    </li>
  );
};

GenreTab.propTypes = {
  onChangeGenres: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired
};

const mapStateToProps = ({genre}) => ({
  genre
});

export {GenreTab};
export default connect(mapStateToProps, null)(GenreTab);
