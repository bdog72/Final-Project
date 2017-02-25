import React, { Component } from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Pizza extends Component {
  render () {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}

    return <div>
      <h1 className='heads1'>Pizza</h1>
      <main>
        <div className='well' style={wellStyles}>
          <LinkContainer to='/restaurant/little-italy'>
            <Button bsSize='large' block>Little Italy</Button>
          </LinkContainer>
          <LinkContainer to='/restaurant/italia-mia'>
            <Button bsSize='large' block>Italia Mia</Button>
          </LinkContainer>
          <LinkContainer to='/restaurant/paisanos'>
            <Button bsSize='large' block>Paisanos</Button>
          </LinkContainer>
          <LinkContainer to='/restaurant/28-grams'>
            <Button bsSize='large' block>28 Grams</Button>
          </LinkContainer>
        </div>
        <Grid>
          <Row>
            <LinkContainer to='/restaurant/pizza-box'>
              <Col xs={6} md={4}>
                <Button bsSize='large'>Pizza Box</Button>
              </Col>
            </LinkContainer>
          </Row>
        </Grid>
      </main>
    </div>
  }
}
