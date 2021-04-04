import {combineReducers} from 'redux';
import {auth} from './auth/auth';
import {comment} from './comment/comment';
import {films} from './films/films';
import {genre} from './genre/genre';


export const NameSpace = {
  AUTH: `AUTH`,
  FILMS: `FILMS`,
  FILM: `FILM`,
  COMMENT: `COMMENT`,
  GENRE: `GENRE`
};

export default combineReducers({
  [NameSpace.AUTH]: auth,
  [NameSpace.FILMS]: films,
  [NameSpace.COMMENT]: comment,
  [NameSpace.GENRE]: genre,
});
