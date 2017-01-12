import {stateReducer} from '../../util/reducer';
import Immutable from 'immutable';
import {BOARD_UPDATED, BOARD_SELECTED} from './board_constants';

export default stateReducer(Immutable.fromJS({
  boards: {},
  current: 'nick@nicholasstewartcom',
}),
{
  BOARD_SELECTED: (state, payload) => {
    return state.set("current", payload.id);
  },
  BOARD_UPDATED: (state, payload) => {
    return state.setIn(["boards", payload.id], payload.board);
  },
});
