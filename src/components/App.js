
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
import EverythingElse1 from './EverythingElse1'
import Wings1 from './Wings1'
import Pizza1 from './Pizza1'
import Bbq1 from './Bbq1.js'
import Burgers1 from './Burgers1'
import Seafood1 from './Seafood1'
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
        <Route path='/everythingElse1/:slug' component={EverythingElse1} />
        <Route path='/wings1/:slug' component={Wings1} />
        <Route path='/pizza1/:slug' component={Pizza1} />
        <Route path='/bbq1/:slug' component={Bbq1} />
        <Route path='/burgers1/:slug' component={Burgers1} />
        <Route path='/seafood1/:slug' component={Seafood1} />

      </Route>
    </Router>
  }
}
