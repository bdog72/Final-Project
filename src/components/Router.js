import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router-bootstrap'
import Main from './Main'
import Seafood from './Seafood'

export default class Router extends Component {
  render () {
    return <Router history={browserHistory}>
      <Route component={Main}>
        <Route path='/' component={Main} />
        <Route path='/seafood' component={Seafood}>
      </Router>
  }
}
