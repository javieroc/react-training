import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Nav from '../Nav'
import Home from '../Home'
import Profile from '../Profile'

export default (
  <Route path="/" component={Nav}>
    <Route path="profile/:username" component={Profile}></Route>
    <IndexRoute component={Home}/>
  </Route>
)
