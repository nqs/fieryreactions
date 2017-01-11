import firebase from 'firebase';
import { auth } from '../utils/firebase';

export const AUTH_SIGN_IN_SUCCESS = 'AUTH_SIGN_IN_SUCCESS';

export const login = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
      dispatch({
        type: AUTH_SIGN_IN_SUCCESS,
        user: result.user,
      });
      resolve();
    }).catch((error) => {
      alert(error.message);
      reject(error);
    });
  });
};
