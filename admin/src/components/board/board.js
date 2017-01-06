import {connect} from 'react-redux';
import Grid from './grid';

const mapStateToProps = (state) => {
  return {
    board: state.boardState.board,
    user: state.loginState.user,
  };
};

export default connect(
  mapStateToProps
)(Grid);
