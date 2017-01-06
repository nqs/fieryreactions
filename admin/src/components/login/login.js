import {connect} from 'react-redux';
import SignIn from './signin';

const mapStateToProps = (state) => {
  return {
    user: state.loginState.user,
  };
};

export default connect(
  mapStateToProps
)(SignIn);
