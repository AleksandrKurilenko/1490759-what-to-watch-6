import {NameSpace} from '../root-reducer';

export const getActiveCommentFormStatus = (state) => state[NameSpace.COMMENT].isActiveAddCommentForm;
export const getReviews = (state) => state[NameSpace.COMMENT].reviews;
export const getErrorMessage = (state) => state[NameSpace.COMMENT].error;
