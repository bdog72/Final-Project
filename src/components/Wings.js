import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default class Wings extends Component {
  render () {
    return <div>
      <h1 className='heads1'>Wings and BBQ</h1>
      <main>
        <ListGroup>
          <ListGroupItem header='Luckie Bs' href='http://luckiebs.com' />
        </ListGroup>
      </main>
    </div>
  }
}
