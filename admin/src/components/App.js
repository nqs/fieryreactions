import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import Navigation from './shared/navigation';
import Login from './login/login';
import Board from './board/board';

const App = (props) => {
  const control = props.board ? <Board/> : <Login/>;
  return (
    <div className="container">
      <Navigation />
      <div>
        {control}
      </div>
    </div>
  );
};

App.propTypes = {
  board: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    board: state.boardState.board
  };
};

export default connect(
  mapStateToProps
)(App);
