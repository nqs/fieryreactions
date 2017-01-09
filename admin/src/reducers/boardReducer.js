import {
  BOARD_CREATE,
  BOARD_UPDATED,
} from '../actions';

const INITIAL_STATE = {
  id: null,
  board: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOARD_CREATE: {
      const {id, board} = action;
      return {
        ...state,
        id,
        board,
      };
    }
    case BOARD_UPDATED: {
      const board = action.board;
      const grid = board.grid.slice();
      return {
        ...state,
        board: {
          ...board,
          grid,
        },
      };
    }
    default:
      return state;
  }
};
