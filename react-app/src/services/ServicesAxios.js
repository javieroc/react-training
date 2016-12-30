import Axios from 'axios'

class ServicesAxios {

  getRepos(username){
    return Axios.get(`https://api.github.com/users/${username}/repos`)
  }

  getUserInfo(username){
    return Axios.get(`https://api.github.com/users/${username}`)
  }

  getGithubInfo(username){
    return Axios.all([this.getRepos(username), this.getUserInfo(username)])
      .then((arr) => {
        return{
          repos: arr[0].data,
          bio: arr[1].data
        }
      })
  }
}

export default ServicesAxios
