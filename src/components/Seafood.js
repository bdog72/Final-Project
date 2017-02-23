import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Seafood extends Component {
  render () {
    return <div>
      <h1 className='heads1'>Seafood</h1>
      <main>
        <ListGroup bsClass='lists'>
          <LinkContainer to='/restaurant/casual-clam'>
            <ListGroupItem header='Casual Clam' />
          </LinkContainer>
          <LinkContainer to='/restaurant/bonefish-grill'>
            <ListGroupItem header='BoneFish Grill' />
          </LinkContainer>
        </ListGroup>
      </main>
    </div>
  }
}
