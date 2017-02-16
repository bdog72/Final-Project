import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
export default class Seafood extends Component {
  render () {
    return <div>
      <h1 className='heads1'>Seafood</h1>
      <main>
        <ListGroup className='lists'>
          <ListGroupItem header='Casual Clam' href='http://www.casualclam.com/' />
        </ListGroup>
      </main>
    </div>
  }
}
