import {connect} from 'react-redux';
import SignIn from './signin';
import {login, boardCreate} from '../../actions';
const mapStateToProps = (state) => {
  return {
    user: state.loginState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch(boardCreate());
      dispatch(login());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
