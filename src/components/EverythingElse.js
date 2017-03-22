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
          <LinkContainer to='/everythingElse1/bjs-brewhouse'>
            <Button bsSize='large' block>Bj's Brewhouse</Button>
          </LinkContainer>
          <LinkContainer to='/everythingElse1/pollo-tropical'>
            <Button bsSize='large' block>Pollo Tropical</Button>
          </LinkContainer>
          <LinkContainer to='/everythingElse1/glory-days'>
            <Button bsSize='large' block>Glory Days</Button>
          </LinkContainer>
          <LinkContainer to='/everythingElse1/cheddars'>
            <Button bsSize='large' block>Cheddars</Button>
          </LinkContainer>
          <LinkContainer to='/everythingElse1/pei-wei'>
            <Button bsSize='large' block>Pei Wei</Button>
          </LinkContainer>
          <LinkContainer to='/everythingElse1/hooks'>
            <Button bsSize='large' block>Hooks</Button>
          </LinkContainer>
          <LinkContainer to='/everythingElse1/tijuana flats'>
            <Button bsSize='large' block>Tijuana Flats</Button>
          </LinkContainer>
          <LinkContainer to='/everythingElse1/pdq'>
            <Button bsSize='large' block>PDQ</Button>
          </LinkContainer>
          <LinkContainer to='/everythingElse1/fresh kitchen'>
            <Button bsSize='large' block>Fresh Kitchen</Button>
          </LinkContainer>
        </div>
      </main>
    </div>
  }
}
