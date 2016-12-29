// Children props

import React from 'react';

class App2 extends React.Component {
  render(){
    return <Button>I <Heart /> React</Button>
  }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render(){
    return <span>&hearts;</span>
  }
}

export default App2