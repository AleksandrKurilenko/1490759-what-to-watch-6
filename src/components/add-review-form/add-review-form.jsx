import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RatingStar from '../rating-star/rating-star';
import {postComment} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';

const RATING_STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CommentLength = {
  MIN: 50,
  MAX: 400
};

const AddReviewForm = ({filmID, submit, activateForm, isActiveForm}) => {
  const [userReview, setUserReview] = useState({rating: `10`, text: ``});
  useEffect(() => {
    activateForm(userReview.text.length >= CommentLength.MIN && userReview.text.length <= CommentLength.MAX);
  }, [userReview]);
  return (
    <form action="#" className="add-review__form" onSubmit={(evt) => {
      evt.preventDefault();
      activateForm(false);
      submit(filmID, userReview);
    }}>
      <div className="rating">
        <div className="rating__stars">
          {RATING_STARS.map((element) => <RatingStar
            key={element}
            rating={element}
            userReview={userReview}
            setUserReview={setUserReview}
          />)}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" defaultValue={``} onInput={(evt) => {
          setUserReview({
            ...userReview,
            text: evt.target.value
          });
        }} />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isActiveForm ? `` : `disabled`}>Post</button>
        </div>
      </div>
    </form>
  );
};

AddReviewForm.propTypes = {
  submit: PropTypes.func.isRequired,
  activateForm: PropTypes.func.isRequired,
  isActiveForm: PropTypes.bool.isRequired,
  filmID: PropTypes.number.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  submit(filmID, comment) {
    dispatch(postComment(filmID, comment));
  },
  activateForm(boolean) {
    dispatch(ActionCreator.activeForm(boolean));
  }
});

const mapStateToProps = ({isActiveAddCommentForm}) => ({
  isActiveForm: isActiveAddCommentForm,
});

export {AddReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
