import React, {Component} from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
export default class Burgers extends Component {
  render () {
    return <div>
      <h1 className='heads1'>Burgers</h1>
      <main>
        <ListGroup>
          <ListGroupItem header='Burger Monger' href='http://www.burgermonger.com/' />
        </ListGroup>
      </main>
    </div>
  }
}
