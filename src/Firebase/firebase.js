import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA2teroMAWZgbuBguO1dt2nnYg2PnHJ2q0",
    authDomain: "tiktok-clone-29165.firebaseapp.com",
    databaseURL: "https://tiktok-clone-29165.firebaseio.com",
    projectId: "tiktok-clone-29165",
    storageBucket: "tiktok-clone-29165.appspot.com",
    messagingSenderId: "294298820144",
    appId: "1:294298820144:web:1154480eeab08c032657f5",
    measurementId: "G-D903S08WPH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;