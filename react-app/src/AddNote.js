import React from 'react'

class AddNote extends React.Component {

  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    let newNote = this.refs.note.value
    this.refs.note.value = ''
    this.props.addNote(newNote)
    this.refs.note.focus()
  }

  render(){
    return(
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Note" ref="note"/>
        <spam className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
        </spam>
      </div>
    )
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
}

export default AddNote
