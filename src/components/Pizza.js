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
          <LinkContainer to='/pizza1/little-italy'>
            <Button bsSize='large' block>Little Italy</Button>
          </LinkContainer>
          <LinkContainer to='/pizza1/italia-mia'>
            <Button bsSize='large' block>Italia Mia</Button>
          </LinkContainer>
          <LinkContainer to='/pizza1/paisanos'>
            <Button bsSize='large' block>Paisanos</Button>
          </LinkContainer>
          <LinkContainer to='/pizza1/28-grams'>
            <Button bsSize='large' block>28 Grams</Button>
          </LinkContainer>
          <LinkContainer to='/pizza1/pizza-box'>
            <Button bsSize='large' block>Pizza Box</Button>
          </LinkContainer>
          <LinkContainer to='/pizza1/uncle maddios'>
            <Button bsSize='large' block>Uncle Maddio's</Button>
          </LinkContainer>
          <LinkContainer to='/pizza1/joey brooklyn'>
            <Button bsSize='large' block>Joey Brooklyn's</Button>
          </LinkContainer>
        </div>
        {/* <Grid>
          <Row>
            <LinkContainer to='/pizza1/pizza-box'>
              <Col xs={6} md={4}>
                <Button bsSize='large'>Pizza Box</Button>
              </Col>
            </LinkContainer>
          </Row>
        </Grid> */}
      </main>
    </div>
  }
}
