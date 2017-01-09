import {stateReducer} from '../../util/reducer';
import {BOARD_UPDATED} from './select_cell';

export default stateReducer({
  "id" : "123",
  "board" : {
    "grid" : [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    "winner" : 0
  }
},
{
  BOARD_UPDATED: (payload) => payload
});
