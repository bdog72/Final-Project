import React, { Component } from 'react'
import { PageHeader } from 'react-bootstrap'
import Thumbnails from './Thumbnails'
import { Link } from 'react-router'

export default class Layout extends Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  render () {
    return <div>
      <PageHeader className='head'><p>Rest-au-rant</p></PageHeader>
      <Thumbnails />
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Seafood'>Seafood</Link></li>
        <li><Link to='/Burgers'>Burgers</Link></li>
        <li><Link to='/Wings'>Wings</Link></li>
        <li><Link to='/Pizza'>Pizza</Link></li>
      </ul>
      <main>
        { this.props.children }
      </main>
    </div>
  }
}
