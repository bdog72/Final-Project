import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Thumbnails extends Component {
  render () {
    return <div>
      <Grid>
        <Row>
          <Col xs={6} md={3}>
            <LinkContainer to='/Seafood'>
              <Thumbnail className='thumbpics1' src='http://mississippiseafoodtrail.com/img/dinner-plate.png'>
                <p>SEAFOOD</p>
              </Thumbnail>
            </LinkContainer>
          </Col>
          <Col xs={6} md={3}>
            <LinkContainer to='/Burgers'>
              <Thumbnail className='thumbpics1' src='http://www.addictedtogrilling.com/sites/default/files/burger_works_386x311.jpg'>
                <p>Burgers</p>
              </Thumbnail>
            </LinkContainer>
          </Col>
          <Col xs={6} md={3}>
            <LinkContainer to='/Wings'>
              <Thumbnail className='thumbpics1' src='http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2012/12/20/0/FNM_010113-Chinese-Barbecue-Wings-Recipe_s4x3.jpg.rend.sniipadlarge.jpeg'>
                <p>Wings and BBQ</p>
              </Thumbnail>
            </LinkContainer>
          </Col>
          <Col xs={6} md={3}>
            <LinkContainer to='/Pizza'>
              <Thumbnail className='thumbpics1' src='http://sirpizza-mi.com/wp-content/uploads/2014/07/Sir-Pizza-Pan-Pizza-1920x12001.jpg'>
                <p>Pizza</p>
              </Thumbnail>
            </LinkContainer>
          </Col>
          <Col xs={6} md={3}>
            <LinkContainer to='/EverythingElse'>
              <Thumbnail className='thumbpics1'>
                <p>Everything Else</p>
              </Thumbnail>
            </LinkContainer>
          </Col>
        </Row>
      </Grid>
    </div>
  }
}
