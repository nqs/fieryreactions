import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../root_reducer';

export default function configureStore(initialState) {
  const middlewares = [
    thunkMiddleware,
    promiseMiddleware(),
  ];

  return createStore(rootReducer, initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  );
}
