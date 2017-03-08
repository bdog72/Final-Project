import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Bbq extends Component {

  render () {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}
    return <div>
      <h1 className='heads1'>Wings and BBQ</h1>
      <main>
        <div className='well' style={wellStyles}>
          <LinkContainer to='/bbq1/luckie-bs'>
            <Button bsSize='large' block>Luckie B's</Button>
          </LinkContainer>
          <LinkContainer to='/bbq1/jimbos'>
            <Button bsSize='large' block>Jimbos Pit BBQ</Button>
          </LinkContainer>
        </div>
      </main>
    </div>
  }
}
