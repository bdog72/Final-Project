import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Wings extends Component {

  render () {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}
    return <div>
      <h1 className='heads1'>Wings and BBQ</h1>
      <main>
        <div className='well' style={wellStyles}>
          <LinkContainer to='/wings1/ale-house'>
            <Button bsSize='large' block>Ale-House</Button>
          </LinkContainer>
        </div>
      </main>
    </div>
  }
}
