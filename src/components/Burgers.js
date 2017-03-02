import React, {Component} from 'react'
import { Grid, Col, Row, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Burgers extends Component {
  render () {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}
    return <div>
      <h1 className='heads1'>Burgers</h1>
      <main>
        <div className='well' style={wellStyles}>
          <LinkContainer to='/burgers1/burger-monger'>
            <Button bsSize='large' block>Burger Monger</Button>
          </LinkContainer>
        </div>
        <Grid>
          <Row>
            <LinkContainer to='/burgers1/five-guys'>
              <Col xs={6} md={4}>
                <Button bsSize='large'>Five Guys</Button>
              </Col>
            </LinkContainer>
          </Row>
        </Grid>
      </main>
    </div>
  }
}
