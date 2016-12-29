import React from 'react'
import {hashHistory} from 'react-router'

class SearchGithub extends React.Component {

  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    let username = this.refs.username.value
    this.refs.username.value = ''
    hashHistory.push('profile/' + username)
  }

  render(){
    return(
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref="username" />
          </div>
          <div className="form-group col-sm-5">
            <button className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchGithub
