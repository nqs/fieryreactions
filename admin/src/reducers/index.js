import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  boardState: boardReducer,
  loginState: loginReducer,
});

export default rootReducer;
