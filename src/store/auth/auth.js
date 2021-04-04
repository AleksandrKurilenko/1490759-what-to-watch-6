import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';
import {AuthorizationErrorMessage, AuthorizationStatuses} from '../../consts';

const initialState = {
  authorizationStatus: AuthorizationStatuses.NO_AUTH,
  isAuthorisationFailed: false,
  errorMessage: AuthorizationErrorMessage.DEFAULT,
};

const auth = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.AUTHORIZATION, (state, action) => {
    state.isAuthorisationFailed = false;
    state.authorizationStatus = action.payload;
    state.errorMessage = AuthorizationErrorMessage.DEFAULT;
  });
  builder.addCase(ActionType.AUTHORIZATION_FAILED, (state, action) => {
    state.isAuthorisationFailed = true;
    state.errorMessage = action.payload;
  });
});

export {auth};
