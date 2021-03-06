import {connect} from 'react-redux';
import Grid from './grid';
import {selectCell} from '../../actions';
const mapStateToProps = (state) => {
  return {
    board: state.boardState.board,
    user: state.loginState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    click: (index) => dispatch(selectCell(index)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);
