import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import { Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router'

export default class Thumbnails extends Component {
  render () {
    return <div>
      <Grid>
        <Row>
          <Col xs={6} md={3}>
            <Thumbnail className='thumbpics1' src='http://mississippiseafoodtrail.com/img/dinner-plate.png' width='200' height='200'>
              <h3 className='foodChoices'>Seafood</h3>
              <Button>
                <Menu.Item as={Link} to='/Seafood'>Click Here</Menu.Item>
              </Button>
              {/* <Button as={Link} to='/Seafood'>Click Here</Button> */}
              {/* <Button bsStyle='primary'>Click Here</Button> */}
            </Thumbnail>
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail className='thumbpics1' src='http://www.addictedtogrilling.com/sites/default/files/burger_works_386x311.jpg' width='200' height='200'>
              <h3 className='foodChoices'>Burgers and Stuff</h3>
              <Button>
                <Menu.Item as={Link} to='/Burgers'>Click Here</Menu.Item>
              </Button>
            </Thumbnail>
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail className='thumbpics1' src='http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2012/12/20/0/FNM_010113-Chinese-Barbecue-Wings-Recipe_s4x3.jpg.rend.sniipadlarge.jpeg' width='200' height='200'>
              <h3 className='foodChoices'>Wings and BBQ</h3>
              <Button>
                <Menu.Item as={Link} to='/Wings'>Click Here</Menu.Item>
              </Button>
            </Thumbnail>
          </Col>
          <Col xs={6} md={3}>
            <Thumbnail className='thumbpics1' src='http://www.cicis.com/media/1138/pizza_trad_pepperoni.png' width='200' height='200'>
              <h3 className='foodChoices'>Pizza</h3>
              <Button>
                <Menu.Item as={Link} to='/Pizza'>Click Here</Menu.Item>
              </Button>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    </div>
  }
}
