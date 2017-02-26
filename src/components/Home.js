import React, { Component } from 'react'
import Thumbnails from './Thumbnails'
import Practice from './Practice'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
export default class Home extends Component {
  render () {
    return <div>
      <Practice />
      <LinkContainer className='everyE' to='/EverythingElse'>
        <Button>
          <p>Everything Else</p>
        </Button>
      </LinkContainer>
      <p className='home1'>These are the restaurants i enjoy</p>
      <Thumbnails />
    </div>
  }
}
