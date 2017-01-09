import React, {Component} from 'react';
import {Provider} from 'react-redux';

import configureStore from './store';
import Root from './root_component';
import { FirebaseListener } from './util/firebase/firebase_listener';

const store = configureStore();

// the point of this component is to host the app providing the access to the redux store
// this needs to be a class so that HMR will work properly
export default class Host extends Component { // eslint-disable-line
  constructor() {
    super();
    const listener = new FirebaseListener(store);
    listener.startListening();
  }

  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
