import {isWinningMove} from '../../util/board/board_service';
import { database, boards } from '../../util/firebase/firebase';
export const BOARD_UPDATED= 'BOARD_UPDATED';

export default (index) => (dispatch, getState) => {
  const {id, board} = getState().board;
  if(board.winner === 0) {
    const turn = board.grid.reduce((a,b)=>a+b);
    const grid = board.grid.slice();

    grid[index] = turn === 0 ? 1 : -1;

    const winner = isWinningMove(grid, index);

    database.ref(`boards/${id}`).set(board).then( () => dispatch({
      type: BOARD_UPDATED,
      payload:{
        id,
        board : {
          grid,
          winner
        },
      },
    }));
  }
};
