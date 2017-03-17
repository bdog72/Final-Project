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
          <LinkContainer to='/burgers1/pete and shortys'>
            <Button bsSize='large' block>Pete and Shorty's</Button>
          </LinkContainer>
        </div>
        {/* <Grid>
          <Row>
            <Col>
              <LinkContainer to='/burgers1/five-guys'>
                <Button bsSize='large'>Five Guys</Button>
              </LinkContainer>
              <LinkContainer to='/burgers1/five-guys'>
                <Button bsSize='large'>Five Guys</Button>
              </LinkContainer>
              <LinkContainer to='/burgers1/five-guys'>
                <Button bsSize='large'>Five Guys</Button>
              </LinkContainer>
              <LinkContainer to='/burgers1/five-guys'>
                <Button bsSize='large'>Five Guys</Button>
              </LinkContainer>
              <LinkContainer to='/burgers1/five-guys'>
                <Button bsSize='large'>Five Guys</Button>
              </LinkContainer>
              <LinkContainer to='/burgers1/five-guys'>
                <Button bsSize='large'>Five Guys</Button>
              </LinkContainer>
              <LinkContainer to='/burgers1/five-guys'>
                <Button bsSize='large'>Five Guys</Button>
              </LinkContainer>
            </Col>
          </Row>
        </Grid> */}
      </main>
    </div>
  }
}
