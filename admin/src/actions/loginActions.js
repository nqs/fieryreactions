import firebase from 'firebase';
import { auth } from '../utils/firebase';
import { push } from 'react-router-redux';

export const AUTH_SIGN_IN_SUCCESS = 'AUTH_SIGN_IN_SUCCESS';

export const login = () => (dispatch) => {
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
    dispatch({
      type: AUTH_SIGN_IN_SUCCESS,
      user: result.user,
    });
    dispatch(push('/board'));
  }).catch((error) => {
    alert(error.message);
  });
};
