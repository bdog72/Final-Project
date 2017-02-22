import React, { Component } from 'react'
import Thumbnails from './Thumbnails'

export default class Home extends Component {
  render () {
    return <div>
      <Thumbnails />
      <p className='home1'>These are the restaurants i enjoy</p>
    </div>
  }
}
