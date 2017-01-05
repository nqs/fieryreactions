import firebase from 'firebase';
import { auth } from '../utils/firebase';

export const AUTH_SIGN_IN_SUCCESS = 'AUTH_SIGN_IN_SUCCESS';

export const login = () => (dispatch) => {
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
    dispatch({
      type: AUTH_SIGN_IN_SUCCESS,
      token: result.credential.accessToken,
      user: result.user,
    });
  }).catch((error) => {
    alert(error.message);
  });
};
