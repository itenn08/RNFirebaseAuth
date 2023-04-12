// // import * as firebase from 'firebase';
// import firebase from 'firebase';
// import '@firebase/auth';
// import '@firebase/firestore';

// const firebaseConfig = {
//   //   apiKey: 'AIzaSyBiuHNQOycs1NzXgkUEhknYP4hdhMZ6OgE',
//   //   authDomain: 'your-auth-domain-b1234.firebaseapp.com',
//   //   databaseURL: 'https://your-database-name.firebaseio.com',
//   //   projectId: 'reactnativetest-8e875',
//   //   storageBucket: 'your-project-id-1234.appspot.com',
//   //   messagingSenderId: '12345-insert-yourse',
//   //   appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',

// apiKey: 'AIzaSyBiuHNQOycs1NzXgkUEhknYP4hdhMZ6OgE',
// authDomain: 'reactnativetest-8e875.firebaseapp.com',
// projectId: 'reactnativetest-8e875',
// storageBucket: 'reactnativetest-8e875.appspot.com',
// messagingSenderId: '74192060792',
// appId: '1:74192060792:web:220d984a34cd6ea2e3c88d',
// measurementId: 'G-GD0CNR4LPC',
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export {firebase};

// import firebase from '@react-native-firebase/app';

// // Your secondary Firebase project credentials...
// const credentials = {
// apiKey: 'AIzaSyBiuHNQOycs1NzXgkUEhknYP4hdhMZ6OgE',
// authDomain: 'reactnativetest-8e875.firebaseapp.com',
// projectId: 'reactnativetest-8e875',
// storageBucket: 'reactnativetest-8e875.appspot.com',
// messagingSenderId: '74192060792',
// appId: '1:74192060792:web:220d984a34cd6ea2e3c88d',
// measurementId: 'G-GD0CNR4LPC',
// };

// const config = {
//   name: 'SECONDARY_APP',
// };

// firebase.initializeApp(credentials, config);

// import {initializeApp} from 'firebase/app';
// import 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBiuHNQOycs1NzXgkUEhknYP4hdhMZ6OgE',
  authDomain: 'reactnativetest-8e875.firebaseapp.com',
  projectId: 'reactnativetest-8e875',
  storageBucket: 'reactnativetest-8e875.appspot.com',
  messagingSenderId: '74192060792',
  appId: '1:74192060792:web:220d984a34cd6ea2e3c88d',
  measurementId: 'G-GD0CNR4LPC',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export {auth, db};
