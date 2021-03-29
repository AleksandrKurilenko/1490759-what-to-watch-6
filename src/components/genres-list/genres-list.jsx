import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import GenreTab from '../genre-tab/genre-tab';


const GenresList = ({onChangeGenres, genres}) => {

  return (
    <ul className="catalog__genres-list">
      {genres.map((tab) => <GenreTab
        tab={tab}
        key={tab}
        onChangeGenres={onChangeGenres}
      />)}
    </ul>
  );
};

GenresList.propTypes = {
  onChangeGenres: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onChangeGenres(type) {
    dispatch(ActionCreator.changeGenres(type));
  },
});

const mapStateToProps = (state) => ({
  genres: state.genres,
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
