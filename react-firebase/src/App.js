import React from 'react'
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAFRyuC5eW99TawHPiWYSsAEymK7ZMGoKY',
  authDomain: 'react-firebase-2a697.firebaseapp.com',
  databaseURL: 'https://react-firebase-2a697.firebaseio.com',
  storageBucket: 'react-firebase-2a697.appspot.com',
  messagingSenderId: '932560139064'
};
firebase.initializeApp(config);

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      name: 'Javier'
    }
  }

  componentWillMount(){
    const nameRef = firebase.database().ref().child('object').child('name')

    nameRef.on('value', (snapshot) => {
      this.setState({
        name: snapshot.val()
      })
    })
  }

  render(){
    return(
      <h1>{this.state.name}</h1>
    )
  }
}

export default App
