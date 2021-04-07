import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';
import {AuthorizationErrorMessage, AuthorizationStatus} from '../../consts';


const initialState = {
  authorizationError: false,
  authorizationStatus: AuthorizationStatus.INITIAL,
  isAuthorisationFailed: false,
  errorMessage: AuthorizationErrorMessage.DEFAULT,
  userAvatar: ``,
};

const auth = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.AUTHORIZATION, (state, {payload: {action, avatar}}) => {
    state.isAuthorisationFailed = false;
    state.authorizationStatus = action;
    state.errorMessage = AuthorizationErrorMessage.DEFAULT;
    state.userAvatar = avatar;
  });
  builder.addCase(ActionType.AUTHORIZATION_FAILED, (state, action) => {
    state.isAuthorisationFailed = true;
    state.errorMessage = action.payload;
  });
  builder.addCase(`ERR`, (state, action) => {
    state.authorizationError = action.payload;
  });
});

export {auth};
