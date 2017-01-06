import {connect} from 'react-redux';
import Grid from './grid';

const mapStateToProps = (state) => {
  return {
    board: state.boardState.board,
  };
};

export default connect(
  mapStateToProps
)(Grid);
