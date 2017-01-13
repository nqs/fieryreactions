import {stateReducer} from '../../util/reducer';
import Immutable from 'immutable';
import {BOARD_UPDATED, BOARD_SELECTED, BOARD_HIDE_WINNER} from './board_constants';

export default stateReducer(Immutable.fromJS({
  boards: {},
  current: '',
  hiddenWinners:{}
}),
{
  BOARD_HIDE_WINNER:(state, payload) => {
    return state.setIn(["hiddenWinners", payload.id], true);
  },
  BOARD_SELECTED: (state, payload) => {
    return state
      .set("current", payload.id)
      .setIn(["hiddenWinners", payload.id], false);
  },
  BOARD_UPDATED: (state, payload) => {
    return state.setIn(["boards", payload.id], payload.board);
  },
});
