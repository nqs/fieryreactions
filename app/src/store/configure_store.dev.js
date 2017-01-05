import {createStore, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../root_reducer';

export default function configureStore(initialState) {
  const middlewares = [
    reduxImmutableStateInvariant(),
    thunkMiddleware,
    promiseMiddleware(),
  ];

  const store = createStore(rootReducer, initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  );

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept('../root_reducer', () => {
      const nextReducer = require('../root_reducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
