import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { auth } from './utils/firebase';
import App from './components/App';
import NotFoundPage from './components/static/NotFoundPage';
import Board from './components/board/board';
import Login from './components/login/login';

const authorize =  (nextState, replace) => {
  if(!auth.currentUser)
  {
    return replace({
      pathname: '/'
    });
  }
};

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="board" component={Board} onEnter={authorize}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
