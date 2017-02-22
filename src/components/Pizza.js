import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default class Pizza extends Component {
  render () {
    return <div>
      <h1 className='heads1'>Pizza</h1>
      <main>
        <ListGroup bsClass='lists'>
          <ListGroupItem header='Little Italy' href='https://tobysoriginallittleitalypizza.com/' />
          <ListGroupItem header='Italia Mia' href='http://laitaliamia.com/' />
          <ListGroupItem header='Paisanos' href='http://paisanospnp.com/' />
          <ListGroupItem header='28 Grams Pizza' href='http://www.28gramspizza.com/' />
        </ListGroup>
      </main>
    </div>
  }
}
