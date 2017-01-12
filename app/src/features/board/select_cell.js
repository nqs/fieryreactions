import {isWinningMove} from '../../util/board/board_service';
import { database, boards } from '../../util/firebase/firebase';

export default (index) => (dispatch, getState) => {
  const boardState = getState().board;
  const id = boardState.get("current");
  let board = boardState.get("boards").get(id);
  const turn = board.get("grid").reduce((a,b)=>a+b);

  if(board.get("winner") === 0 && turn === 0) {
    board = board.setIn(["grid", index], 1);
    const winner = isWinningMove(board.get("grid").toJS(), index);
    board = board.set("winner", winner);
    database.ref(`boards/${id}`).set(board.toJS());
  }
};
