import React, { Component } from 'react'
import { PageHeader } from 'react-bootstrap'
import Thumbnails from './Thumbnails'

export default class Layout extends Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  render () {
    return <div>
      <PageHeader className='head'><p>Rest-au-rant</p></PageHeader>
      <Thumbnails />
      <main>
        { this.props.children }
      </main>
    </div>
  }
}
