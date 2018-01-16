import {combineReducers} from 'redux';
import comicReducer from './comic';

export default combineReducers({
  comics: comicReducer
})
