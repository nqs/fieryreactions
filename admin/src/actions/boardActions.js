import {isWinningMove} from '../utils/boardService';
import { database } from '../utils/firebase';

export const BOARD_UPDATED= 'BOARD_UPDATED';
export const BOARD_CREATE = 'BOARD_CREATE';

export const boardCreate = () => (dispatch, getState) => {
  return new Promise((resolve) => {
    const user = getState().loginState.user;
    const id = user.email.replace(/\./g,'');
    const board = {
      grid: new Array(9).fill(0),
      user: {
        name: user.displayName,
        email: user.email,
      },
      winner: 0,
    };

    const firebaseBoard = database.ref(`boards/${id}`);

    firebaseBoard.set(board).then(() => {
      dispatch({
        type: BOARD_CREATE,
        id,
        board,
      });
      resolve();
    });

    firebaseBoard.on('value', (snapshot) => {
      dispatch({
        type: BOARD_UPDATED,
        id: snapshot.key,
        board: snapshot.val(),
      });
    });
  });
};

export const selectCell = (index) => (dispatch, getState) => {
  const {id, board} = getState().boardState;
  const turn = board.grid.reduce((a,b)=>a+b);

  if(board.winner === 0 && turn === 1) {
    const grid = board.grid.slice();

    grid[index] = -1;

    database.ref(`boards/${id}`).set({
      ...board,
      grid,
      winner: isWinningMove(grid, index),
    });
  }
};
