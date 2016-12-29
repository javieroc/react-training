import React from 'react'
import {Router} from 'react-router'
import Firebase from 'firebase'
import UserProfile from './UserProfile'
import Repos from './Repos'
import Notes from './Notes'
import ServicesAxios from './services/ServicesAxios'

class Profile extends React.Component {
  constructor(){
    super();
    this.state = {
      notes: [],
      bio: {},
      repos: []
    }
    this.handleAddNote = this.handleAddNote.bind(this)
    this.init = this.init.bind(this)
  }

  componentDidMount(){
    /*
    const notesDB = Firebase.database().ref(this.props.params.username).child('notes')

    notesDB.once('value').then((snapshot) => {
      let objectNotes = snapshot.val()
      let arrayNotes = Object.keys(objectNotes).map((key) => {return objectNotes[key]})
      this.setState({
        notes: arrayNotes
      })
    })

    notesDB.on('child_added', (snapshot) => {
      this.setState({
        notes: this.state.notes.concat(snapshot.val())
      })
    })

    let axios = new ServicesAxios()
    axios.getGithubInfo(this.props.params.username).then((data) => {
      this.setState({
        repos: data.repos,
        bio: data.bio
      })
    })
    */
    this.init(this.props.params.username)
  }

  componentWillReceiveProps(nextProps){
    this.init(nextProps.params.username)
    console.log(nextProps.params.username)
  }

  init(username){
    let notesDB = Firebase.database().ref(username).child('notes')

    notesDB.once('value').then((snapshot) => {
      let objectNotes = snapshot.val()
      let arrayNotes = objectNotes != null ? Object.keys(objectNotes).map((key) => {return objectNotes[key]}) : []

      this.setState({
        notes: arrayNotes
      })
    })

    notesDB.on('child_added', (snapshot) => {
      this.setState({
        notes: this.state.notes.concat(snapshot.val())
      })
    })

    let axios = new ServicesAxios()
    axios.getGithubInfo(username).then((data) => {
      this.setState({
        repos: data.repos,
        bio: data.bio
      })
    })
  }

  handleAddNote(newNote){
    Firebase.database().ref(this.props.params.username).child('notes').push().set(newNote)
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleAddNote}
          />
        </div>
      </div>
    )
  }
}

export default Profile
