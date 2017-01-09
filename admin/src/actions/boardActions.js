import {isWinningMove} from '../utils/boardService';
import { database, boards } from '../utils/firebase';
export const BOARD_UPDATED= 'BOARD_UPDATED';
export const BOARD_CREATE = 'BOARD_CREATE';

export const boardCreate = () => (dispatch) => {
  const id = boards.push().key;
  const board = {
    grid: new Array(9).fill(0),
    winner: 0,
  };

  database.ref(`boards/${id}`).set(board).then( () => dispatch({
    type: BOARD_CREATE,
    id,
    board,
  }));
};

export const selectCell = (index) => (dispatch, getState) => {
  const {id, board} = getState().boardState;
  const turn = board.grid.reduce((a,b)=>a+b);
  if(board.winner === 0) {
    board.grid[index] = turn === 0 ? 1 : -1;
    board.winner = isWinningMove(board.grid, index);

    database.ref(`boards/${id}`).set(board).then( () => dispatch({
      type: BOARD_UPDATED,
      id,
      board,
    }));
  }
};
