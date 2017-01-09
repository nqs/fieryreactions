import {combineReducers} from 'redux';

import board from './features/board/board_reducer';

const rootReducer = combineReducers({
  board,
});

export default rootReducer;
