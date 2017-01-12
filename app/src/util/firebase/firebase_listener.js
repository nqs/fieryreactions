import { boards } from './firebase';
import Immutable from 'immutable';
import {BOARD_UPDATED} from '../../features/board/board_constants';

export class FirebaseListener {
  constructor(store) {
    this.dispatch = store.dispatch;
    this.store = store;
    this.listening = false;
  }

  startListening() {
    if (this.listening) {
      return;
    }

    boards.once('value').then((snapshot) => {
      const list = [];
      snapshot.forEach((childSnapshot) => {
        this.sendBoardUpdate(childSnapshot.key, childSnapshot.val());
      });
    });

    boards.on('child_changed', (snapshot) => {
      this.sendBoardUpdate(snapshot.key, snapshot.val());
    });

    boards.on('child_added', (snapshot) => {
      this.sendBoardUpdate(snapshot.key, snapshot.val());
    });

    boards.on('child_removed', (snapshot) => {
    });

    this.listening = true;
  }

  sendBoardUpdate(id, board) {
    this.dispatch({
      type: BOARD_UPDATED,
      payload: {
        id,
        board: Immutable.fromJS(board),
      },
    });
  }
}
