import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
export default class EverythingElse extends Component {
  render () {
    return <div>
      <h1 className='heads1'>Everything Else</h1>
      <main>
        <ListGroup>
          <ListGroupItem header='Bjs BrewHouse' href='https://www.bjsrestaurants.com' />
        </ListGroup>
      </main>
    </div>
  }
}
