import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
// import { Button, Row, Col, Icon, Table } from 'react-materialize'
export default class Seafood extends Component {
  render () {
    return <div>
      <h1 className='heads1'>Seafood</h1>
      <main>
        <ListGroup bsClass='lists'>
          <ListGroupItem header='Casual Clam' href='http://www.casualclam.com' />
          <ListGroupItem header='BoneFish Grill' href='https://www.bonefishgrill.com/' />
        </ListGroup>
        {/* <Row>
          <Col s={6}>
            <Button waves='light'>Add<Icon right>add</Icon></Button>
          </Col>
          <Col s={6}>
            <Button waves='light'>Remove<Icon right>remove</Icon></Button>
          </Col>
        </Row>
        <Table bordered centered>
          <tbody>
            <tr className='menu1'>
              <td href='http://www.casualclam.com'>Casual Clam</td>
              <td>Eclair</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Alan</td>
              <td>Jellybean</td>
              <td>$3.76</td>
            </tr>
            <tr>
              <td>Jonathan</td>
              <td>Lollipop</td>
              <td>$7.00</td>
            </tr>
          </tbody>
        </Table>
        <Col m={6} s={12}>
          <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
    I am a very simple card.
    </Card>
        </Col> */}
      </main>
    </div>
  }
}
