import React, {Component} from 'react';
import Quote from './features/quotes/quote';

// the point of this class is to wrap the app in navigation
// this needs to be a class so that HMR will work properly
export default class Root extends Component { // eslint-disable-line
  render() {
    return (
      <Quote />
    );
  }
}
