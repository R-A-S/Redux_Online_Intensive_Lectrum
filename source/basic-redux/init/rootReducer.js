// Core
import { combineReducers } from 'redux';

//Reducers
import { galleryReducer } from '../bus/gallery/reduser';

export const rootReducer = combineReducers({
    gallery: galleryReducer,
});
