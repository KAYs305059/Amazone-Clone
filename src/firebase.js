import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBzBus0ZBv9h9Xqg6XVLzJPQvqzLLwQ3D0',
  authDomain: 'cl-2be99.firebaseapp.com',
  databaseURL: 'https://cl-2be99.firebaseio.com',
  projectId: 'cl-2be99',
  storageBucket: 'cl-2be99.appspot.com',
  messagingSenderId: '1018453848979',
  appId: '1:1018453848979:web:2e8613ab4d79c915046e66',
  measurementId: 'G-QVLH4SMP8H',
});

const auth = firebase.auth();

export { auth };
