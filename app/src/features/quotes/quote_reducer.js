import {QUOTE} from './load_quote';
import {promiseReducer} from '../../util/reducer';

export default promiseReducer(QUOTE, null, {
  FULFILLED: payload => payload,
});
