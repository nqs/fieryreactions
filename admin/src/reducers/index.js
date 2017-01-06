import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import loginReducer from './loginReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  boardState: boardReducer,
  loginState: loginReducer,
  routing: routerReducer,
});

export default rootReducer;
