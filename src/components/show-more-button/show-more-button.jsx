import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const ShowMoreButton = (onShowMoreFilms) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => {
        onShowMoreFilms();
      }}>Show more</button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onShowMoreFilms: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreFilms() {
    dispatch(ActionCreator.showMoreFilms());
  },
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
