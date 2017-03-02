
import React, {Component} from 'react'
import {browserHistory, Router, Route} from 'react-router'
import Layout from './Layout'
import Home from './Home'
import Seafood from './Seafood'
import Burgers from './Burgers'
import Bbq from './Bbq'
import Wings from './Wings'
import Pizza from './Pizza'
import EverythingElse from './EverythingElse'
import Restaurant from './Restaurant'
import Wings1 from './Wings1'
import Pizza1 from './Pizza1'
import Bbq1 from './Bbq1.js'
export default class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Home} />
        <Route path='/Seafood' component={Seafood} />
        <Route path='/Burgers' component={Burgers} />
        <Route path='/Bbq' component={Bbq} />
        <Route path='/Wings' component={Wings} />
        <Route path='/Pizza' component={Pizza} />
        <Route path='/EverythingElse' component={EverythingElse} />
        <Route path='/restaurant/:slug' component={Restaurant} />
        <Route path='/wings1/:slug' component={Wings1} />
        <Route path='/pizza1/:slug' component={Pizza1} />
        <Route path='/bbq1/:slug' component={Bbq1} />

      </Route>
    </Router>
  }
}
