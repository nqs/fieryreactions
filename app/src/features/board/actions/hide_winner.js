import {BOARD_HIDE_WINNER} from '../board_constants';

export default (id) => ({
  type: BOARD_HIDE_WINNER,
  payload: {
    id,
  },
});
