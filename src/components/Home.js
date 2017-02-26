import React, { Component } from 'react'
// import Thumbnails from './Thumbnails'
import Practice from './Practice'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
export default class Home extends Component {
  render () {
    return <div>
      <Practice />
      <div className='everyE'>
        <LinkContainer to='/EverythingElse'>
          <Button>
            <h3>Everything Else</h3>
          </Button>
        </LinkContainer>
      </div>
      <p className='home1'>These are the restaurants i enjoy</p>
      {/* <Thumbnails /> */}
    </div>
  }
}
