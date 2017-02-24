import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router'
export default class Thumbnails extends Component {
  render () {
    return <div>
      <Grid>
        <Row>
          <Col xs={6} md={3}>
            <Thumbnail className='thumbpics1' src='http://mississippiseafoodtrail.com/img/dinner-plate.png'>
              <Menu.Item className='menu1'as={Link} to='/Seafood'>Seafood</Menu.Item>
            </Thumbnail>
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail className='thumbpics1' src='http://www.addictedtogrilling.com/sites/default/files/burger_works_386x311.jpg'>
              <Menu.Item className='menu1'as={Link} to='/Burgers'>Burgers and Sandwiches</Menu.Item>
            </Thumbnail>
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail className='thumbpics1' src='http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2012/12/20/0/FNM_010113-Chinese-Barbecue-Wings-Recipe_s4x3.jpg.rend.sniipadlarge.jpeg'>
              <Menu.Item className='menu1'as={Link} to='/Wings'>Wings and BBQ</Menu.Item>
            </Thumbnail>
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail className='thumbpics1' src='http://sirpizza-mi.com/wp-content/uploads/2014/07/Sir-Pizza-Pan-Pizza-1920x12001.jpg'>
              <Menu.Item className='menu1'as={Link} to='/Pizza'>Pizza</Menu.Item>
            </Thumbnail>
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail className='thumbpics1'>
              <Menu.Item className='menu1'as={Link} to='/EverythingElse'>Everything Else</Menu.Item>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    </div>
  }
}
