import React from 'react'
import ReactDOM from 'react-dom'
import {Router, hashHistory} from 'react-router'
import Firebase from 'firebase'
import Routes from './config/routes'

const config = {
  apiKey: 'AIzaSyAFBsI4LEJRXTfTgBN9jsc6bt4LWTwBMTY',
  authDomain: 'react-app-25f4c.firebaseapp.com',
  databaseURL: 'https://react-app-25f4c.firebaseio.com',
  storageBucket: 'react-app-25f4c.appspot.com',
  messagingSenderId: '803447131108'
};
Firebase.initializeApp(config);

ReactDOM.render(
  <Router history={hashHistory}>{Routes}</Router>,
  document.getElementById('app')
)
