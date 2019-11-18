import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyBC3k2vyXrcKCUs_-k1uaZ-XXSZZ5zlz6E",
    authDomain: "e-commerce-490e3.firebaseapp.com",
    databaseURL: "https://e-commerce-490e3.firebaseio.com",
    projectId: "e-commerce-490e3",
    storageBucket: "e-commerce-490e3.appspot.com",
    messagingSenderId: "11000716126",
    appId: "1:11000716126:web:fbf2c997df640817010dcf",
    measurementId: "G-WWNXMNEZNP"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;