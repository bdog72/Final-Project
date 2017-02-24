import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class EverythingElse extends Component {

  render () {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}

    return <div>
      <h1 className='heads1'>Everything Else</h1>
      <main>
        <div className='well' style={wellStyles}>
          <LinkContainer to='/restaurant/bjs-brewhouse'>
            <Button bsSize='large' block>Bj's Brewhouse</Button>
          </LinkContainer>
          <LinkContainer to='/restaurant/pollo-tropical'>
            <Button bsSize='large' block>Pollo Tropical</Button>
          </LinkContainer>
          <LinkContainer to='/restaurant/glory-days'>
            <Button bsSize='large' block>Glory Days</Button>
          </LinkContainer>
          <LinkContainer to='/restaurant/cheddars'>
            <Button bsSize='large' block>Cheddars</Button>
          </LinkContainer>
          <LinkContainer to='/restaurant/pei-wei'>
            <Button bsSize='large' block>Pei Wei</Button>
          </LinkContainer>
          <LinkContainer to='/restaurant/ale-house'>
            <Button bsSize='large' block>Ale House</Button>
          </LinkContainer>
        </div>

      </main>
    </div>
  }
}
