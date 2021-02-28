import React, {useState} from 'react';
import RatingStar from '../rating-star/rating-star';

const RATING_STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const AddReviewForm = () => {
  const [userReview, setUserReview] = useState({rating: `10`, text: ``});
  return (
    <form action="#" className="add-review__form">
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
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

export default AddReviewForm;
