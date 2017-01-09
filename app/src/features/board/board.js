import {connect} from 'react-redux';
import Grid from './grid';
import selectCell from './select_cell';

const mapStateToProps = ({board}) => ({board: board.board});

const mapDispatchToProps = (dispatch) => {
  return {
    click: (index) => dispatch(selectCell(index)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);
