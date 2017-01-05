import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyByrzLrB8VyQYYcWKKdP8SAPDSqwqgQMfM",
  authDomain: "fieryreaction.firebaseapp.com",
  databaseURL: "https://fieryreaction.firebaseio.com",
  storageBucket: "fieryreaction.appspot.com",
  messagingSenderId: "353297546716"
};

let _firebaseApp = null;
const firebaseApp = () => {
  if (_firebaseApp == null) {
    _firebaseApp = firebase.initializeApp(firebaseConfig);
  }
  return _firebaseApp;
};

export const timestamp = firebase.database.ServerValue.TIMESTAMP;
export const database = firebaseApp().database();
export const auth = firebaseApp().auth();
export const boards = database.ref('boards');


export default firebaseApp;
