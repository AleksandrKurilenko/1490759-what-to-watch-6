import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addFavorite} from '../../store/api-actions';

const AddFavorite = ({id, isFavorite, addFavoriteFilm}) => {
  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={() => addFavoriteFilm(id, Number(!isFavorite))}>
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref={isFavorite ? `#in-list` : `#add`} />
      </svg>
      <span>My list</span>
    </button>
  );
};

AddFavorite.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  addFavoriteFilm: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  addFavoriteFilm(id, status) {
    dispatch(addFavorite(id, status));
  }
});

export {AddFavorite};
export default connect(null, mapDispatchToProps)(AddFavorite);
