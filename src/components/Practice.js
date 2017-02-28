import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Practice extends Component {
  render () {
    return <div>
      <main>
        {/* <Jumbotron bsClass='jumbo'>
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
        </Jumbotron> */}
        <Carousel bsClass='carousel'>
          <LinkContainer to='/Burgers'>
            <Carousel.Item>
              <img width={500} height={300} src='http://www.cheeseandburger.com/images/html5/home-burger.png' />
              <Carousel.Caption>
                <h3>BURGERS</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </LinkContainer>
          <LinkContainer to='/Pizza'>
            <Carousel.Item>
              <img width={500} height={300} src='http://sirpizza-mi.com/wp-content/uploads/2014/07/Sir-Pizza-Pan-Pizza-1920x12001.jpg' />
              <Carousel.Caption>
                <h3>PIZZA</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </LinkContainer>
          <LinkContainer to='/Seafood'>
            <Carousel.Item>
              <img width={500} height={300} src='http://mississippiseafoodtrail.com/img/dinner-plate.png' />
              <Carousel.Caption>
                <h3>SEAFOOD</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </LinkContainer>
          <LinkContainer to='/Wings'>
            <Carousel.Item>
              <img width={500} height={300} src='http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2012/12/20/0/FNM_010113-Chinese-Barbecue-Wings-Recipe_s4x3.jpg.rend.sniipadlarge.jpeg' />
              <Carousel.Caption>
                <h3>WINGS</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </LinkContainer>
        </Carousel>
      </main>
    </div>
  }
}
