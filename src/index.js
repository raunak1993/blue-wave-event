import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyDsMIXL_ONROosAeNTAu3qe_BoKq62B63k",
    authDomain: "blue-wave-event.firebaseapp.com",
    databaseURL: "https://blue-wave-event.firebaseio.com",
    projectId: "blue-wave-event",
    storageBucket: "blue-wave-event.appspot.com",
    messagingSenderId: "127242535544",
    appId: "1:127242535544:web:1b13f082214f909604e38d",
    measurementId: "G-EKCBZVSBWM"
})



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
