import {BOARD_SELECTED} from '../board_constants';

export default (id) => ({
  type: BOARD_SELECTED,
  payload: {
    id,
  },
});
