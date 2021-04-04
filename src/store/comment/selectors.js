import {NameSpace} from '../main-reducer';

export const getActiveCommentFormStatus = (state) => state[NameSpace.COMMENT].isActiveAddCommentForm;
export const getReviews = (state) => state[NameSpace.COMMENT].reviews;
