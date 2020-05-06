import React from 'react';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import Nav from './components/nav'

function App() {

  var firebaseConfig = {
    apiKey: "AIzaSyDEcESBUlY2k4BYw5bGu0fcw5SE762g2LM",
    authDomain: "expplore-5486f.firebaseapp.com",
    databaseURL: "https://expplore-5486f.firebaseio.com",
    projectId: "expplore-5486f",
    storageBucket: "expplore-5486f.appspot.com",
    messagingSenderId: "477652425945",
    appId: "1:477652425945:web:ccd1cce9d5dda98b2072c8",
    measurementId: "G-BG3LFD285Z"
  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  return (
    <Nav />
  );
}

export default App;
