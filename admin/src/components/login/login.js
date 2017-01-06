import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SignIn from './signin';
import {login} from '../../actions';
const mapStateToProps = (state) => {
  return {
    user: state.loginState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
