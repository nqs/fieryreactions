import {
  BOARD_CREATE,
  BOARD_UPDATED,
} from '../actions';

const INITIAL_STATE = {
  board: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOARD_CREATE: {
      const board = action.board;
      return {
        ...state,
        board,
      };
    }
    case BOARD_UPDATED: {
      const board = action.board;
      return {
        ...state,
        board,
      };
    }
    default:
      return state;
  }
};
