import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NavigationControl from './NavigationControl';
import * as actions from '../../actions';

const mapStateToProps = (state) => {
  return {
    user: state.loginState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationControl);
