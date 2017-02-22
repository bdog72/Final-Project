import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default class Wings extends Component {
  render () {
    return <div>
      <h1 className='heads1'>Wings and BBQ</h1>
      <main>
        <ListGroup bsClass='lists'>
          <ListGroupItem header='Luckie Bs' href='http://luckiebs.com' />
          <ListGroupItem header='Ale House' href='https://millersalehouse.com/locations/st-pete/' />
        </ListGroup>
      </main>
    </div>
  }
}
