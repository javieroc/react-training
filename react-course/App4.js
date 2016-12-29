// Normalize events with react

import React from 'react';

class App4 extends React.Component {
  constructor(){
    super();
    this.state = {currentEvent: '---'}
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({
      currentEvent: e.type
    })
  }
  render(){
    return (
      <div>
        <textarea
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
        />
        <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}

export default App4