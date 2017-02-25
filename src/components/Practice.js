import React, { Component } from 'react'
import { Col, Grid, Row, Jumbotron, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Practice extends Component {
  render () {
    return <div>
      <Jumbotron bsClass='jumbo'>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <LinkContainer to='/Seafood'>
                <Image src='http://mississippiseafoodtrail.com/img/dinner-plate.png' responsive />
              </LinkContainer>
            </Col>
            <Col xs={6} md={4}>
              <LinkContainer to='/Burgers'>
                <Image src='http://www.addictedtogrilling.com/sites/default/files/burger_works_386x311.jpg' responsive />
              </LinkContainer>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    </div>
  }
}
