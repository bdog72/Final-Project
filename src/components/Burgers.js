import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Burgers extends Component {
  render () {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}
    return <div>
      <h1 className='heads1'>Burgers</h1>
      <main>
        <div className='well' style={wellStyles}>
          <LinkContainer to='/restaurant/burger-monger'>
            <Button bsSize='large' block>Burger Monger</Button>
          </LinkContainer>
        </div>
      </main>
    </div>
  }
}
