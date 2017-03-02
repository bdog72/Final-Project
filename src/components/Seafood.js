import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Seafood extends Component {
  render () {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}

    return <div>
      <h1 className='heads1'>Seafood</h1>
      <main>
        <div className='well' style={wellStyles}>
          <LinkContainer to='/seafood1/casual-clam'>
            <Button bsSize='large' block>Casual Clam</Button>
          </LinkContainer>
          <LinkContainer to='/seafood1/bonefish-grill'>
            <Button bsSize='large' block>BoneFish Grill</Button>
          </LinkContainer>
        </div>
      </main>
    </div>
  }
}
