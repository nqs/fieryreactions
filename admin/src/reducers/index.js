import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  boardState: boardReducer,
  routing: routerReducer,
});

export default rootReducer;
