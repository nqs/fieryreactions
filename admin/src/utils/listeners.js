import * as Actions from '../actions';

export class Listeners {
  constructor(store) {
    this.dispatch = store.dispatch;
    this.store = store;
    this.listening = false;
  }

  startListening() {
    if (this.listening) {
      return;
    }
    this.listening = true;
  }
}
