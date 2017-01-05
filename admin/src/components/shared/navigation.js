import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NavigationControl from './NavigationControl';
import * as actions from '../../actions';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(NavigationControl);
