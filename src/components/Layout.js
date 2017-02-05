import React, { Component } from 'react'
import { PageHeader } from 'react-bootstrap'
import Thumbnails from './Thumbnails'
export default class Layout extends Component {
  render () {
    return <div>
      <PageHeader className='head'><p>Rest-au-rant</p></PageHeader>
      <Thumbnails />
    </div>
  }
}
