import {NameSpace} from '../main-reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.AUTH].authorizationStatus;
export const getFailedAuthorizationStatus = (state) => state[NameSpace.AUTH].isAuthorisationFailed;
export const getErrorMessage = (state) => state[NameSpace.AUTH].errorMessage;
