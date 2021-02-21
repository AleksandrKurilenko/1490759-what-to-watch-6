import React from 'react';
import PropTypes from 'prop-types';

const RatingStar = ({rating, userReview, setUserReview}) => {
  return (
    <React.Fragment>
      <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" defaultValue={rating} onChange={(evt) => {
        setUserReview({
          ...userReview,
          rating: parseInt(evt.target.value, 10)
        });
      }} />
      <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
    </React.Fragment>
  );
};

RatingStar.propTypes = {
  rating: PropTypes.number.isRequired,
  userReview: PropTypes.shape({
    rating: PropTypes.number.isRequired
  }),
  setUserReview: PropTypes.func.isRequired
};

export default RatingStar;
