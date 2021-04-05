import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {showMoreFilms} from '../../store/action';

const ShowMoreButton = ({showMoreMovies}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => {
        showMoreMovies();
      }}>Show more</button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  showMoreMovies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  showMoreMovies() {
    dispatch(showMoreFilms());
  },
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
