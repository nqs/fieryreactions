import {combineReducers} from 'redux';

import quote from './features/quotes/quote_reducer';

const rootReducer = combineReducers({
  quote,
});

export default rootReducer;
