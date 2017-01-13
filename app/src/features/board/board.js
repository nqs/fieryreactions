import {connect} from 'react-redux';
import Grid from './components/grid';
import selectCell from './actions/select_cell';

const mapStateToProps = ({board}) => {
  const currentBoard = board.get("boards").get(board.get("current"));

  return {
    board: currentBoard ? currentBoard.toJS() : {}
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
