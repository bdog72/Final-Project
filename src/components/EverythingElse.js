import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
export default class EverythingElse extends Component {
  render () {
    return <div>
      <h1 className='heads1'>Everything Else</h1>
      <main>
        <ListGroup bsClass='lists'>
          <ListGroupItem header='Bjs BrewHouse' href='https://www.bjsrestaurants.com' />
          <ListGroupItem header='Pollo Tropical' href='http://pollotropical.com/home-page' />
          <ListGroupItem header='Glory Days' href='https://www.glorydaysgrill.com' />
          <ListGroupItem header='Cheddars' href='http://cheddars.com' />
        </ListGroup>
      </main>
    </div>
  }
}
