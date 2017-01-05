import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { boards } from './firebase';
import * as Actions from '../actions';

const ListenersService = (props) => {
  messages.once('value').then((snapshot) => {
    const list = [];
    snapshot.forEach((childSnapshot) => {
      list.push({ ...childSnapshot.val(), Id: childSnapshot.key });
    });
    props.messagesReceived(list);
  });

  messages.on('child_changed', (snapshot) => {
    props.messageChanged({ ...snapshot.val(), Id: snapshot.key });
  });

  messages.on('child_added', (snapshot) => {
    props.messageAdded({ ...snapshot.val(), Id: snapshot.key });
  });

  messages.on('child_removed', (snapshot) => {
    props.messageRemoved({ ...snapshot.val(), Id: snapshot.key });
  });

  return <span />;
};


ListenersService.propTypes = {
  messagesReceived: PropTypes.func.isRequired,
  messageChanged: PropTypes.func.isRequired,
  messageAdded: PropTypes.func.isRequired,
  messageRemoved: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
};
export const Listeners = connect(
  null,
  mapDispatchToProps
)(ListenersService);
