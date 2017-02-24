import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class EverythingElse extends Component {

  render () {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}

    return <div>
      <h1 className='heads1'>Everything Else</h1>
      <main>
        <ListGroup bsClass='lists'>
          <ListGroupItem header='Bjs BrewHouse' href='https://www.bjsrestaurants.com' />
          <ListGroupItem header='Pollo Tropical' href='http://pollotropical.com/home-page' />
          <ListGroupItem header='Glory Days' href='https://www.glorydaysgrill.com' />
          <ListGroupItem header='Cheddars' href='http://cheddars.com' />
          <ListGroupItem header='Pei Wei' href='https://www.peiwei.com' />
        </ListGroup>
        <div className='well' style={wellStyles}>
          <LinkContainer to='/restaurant/bjs-brewhouse'>
            <Button bsSize='large' block>Bj's Brewhouse</Button>
          </LinkContainer>
        </div>

      </main>
    </div>
  }
}
