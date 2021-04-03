import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';

const initialState = {
  reviews: {},
  isActiveAddCommentForm: false,
};

const comment = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.POST_COMMENT, (state, action) => {
    state.isActiveAddCommentForm = true;
    state.reviews = Object.assign(
        {},
        state.reviews,
        action.payload
    );
  });
  builder.addCase(ActionType.ACTIVE_FORM, (state, action) => {
    state.isActiveAddCommentForm = action.payload;
  });
  builder.addCase(ActionType.LOAD_COMMENTS, (state, action) => {
    state.reviews = Object.assign(
        {},
        state.reviews,
        action.payload
    );
  });
});

export {comment};
