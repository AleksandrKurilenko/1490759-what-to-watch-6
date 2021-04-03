import React, {memo} from 'react';
import PropTypes from 'prop-types';

const RatingStar = ({rating, setUserReviewRating}) => {
  return (
    <React.Fragment>
      <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" defaultValue={rating} onChange={(evt) => {
        setUserReviewRating(parseInt(evt.target.value, 10));
      }} />
      <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
    </React.Fragment>
  );
};

RatingStar.propTypes = {
  rating: PropTypes.number.isRequired,
  setUserReviewRating: PropTypes.func.isRequired
};

export default memo(RatingStar, (prevProps, nextProps) => {
  return prevProps.rating === nextProps.rating;
});
