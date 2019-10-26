import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDcFxZUI_Vup9efhoA0KcSkBw5WrD2YzkM',
  authDomain: 'sustentsocialapp.firebaseapp.com',
  databaseURL: 'https://sustentsocialapp.firebaseio.com',
  projectId: 'sustentsocialapp',
  storageBucket: 'sustentsocialapp.appspot.com',
  messagingSenderId: '562608529543',
  appId: '1:562608529543:web:cf062454e90da58cd31822',
  measurementId: 'G-35QTWBM7BD',
};
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
