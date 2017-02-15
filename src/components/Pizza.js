import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default class Pizza extends Component {
  render () {
    return <div>
      <h1 className='heads1'>Pizza</h1>
      <main>
        <ListGroup>
          <ListGroupItem header='Little Italy' href='https://tobysoriginallittleitalypizza.com/' />
        </ListGroup>
      </main>
    </div>
  }
}
