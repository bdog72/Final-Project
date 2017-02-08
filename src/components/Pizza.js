import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'

export default class Pizza extends Component {
  render () {
    return <div>
      <h1 className='heads1'>Pizza</h1>
      <main className='mainB'>
        <Jumbotron className='jumbo1' />
      </main>
    </div>
  }
}
