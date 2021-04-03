import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';
import {ALL_GENRES_NAME_TAB} from '../../consts';
import {getGenresName} from '../../utils/common';

const initialState = {
  genre: ALL_GENRES_NAME_TAB,
  genres: [],
};

const genre = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.CHANGE_GENRE, (state, action) => {
    state.genre = action.payload;
  });
  builder.addCase(ActionType.LOAD_GENRES, (state, action) => {
    state.genres = Array.from(getGenresName(action.payload).keys());
  });
});

export {genre};
