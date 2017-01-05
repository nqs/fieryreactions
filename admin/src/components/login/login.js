import {connect} from 'react-redux';
import Grid from './grid';

const mapStateToProps = (state) => {
  return {
    messages: state.messageState.messages,
    width: 500
  };
};

export default connect(
  mapStateToProps
)(Grid);
