// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp, getApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

function StartFireBase() {
  const firebaseConfig = {
    apiKey: 'AIzaSyCHg4H5cEQ8MgO26ZPX-Bj8IzxG6P7J8TU',
    authDomain: 'my--app-b7e18.firebaseapp.com',
    databaseURL: 'https://my--app-b7e18-default-rtdb.firebaseio.com',
    projectId: 'my--app-b7e18',
    storageBucket: 'my--app-b7e18.appspot.com',
    messagingSenderId: '986536761640',
    appId: '1:986536761640:web:43e6a01a05dbd3d4d9d81d',
    measurementId: 'G-RJNCE9E754'
  };

  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  const db = getDatabase(app);
  const auth = getAuth(app);

  return { db, auth };
}

export default StartFireBase;
