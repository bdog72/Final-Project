import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Table } from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
// import { Embed } from 'semantic-ui-react'
export default class EverythingElse extends Component {

  render () {
    function alertClicked () {
      alert('Hello Bdog')
    }
    var products = [{
      id: 1,
      name: 'Product1',
      price: 120
    }, {
      id: 2,
      name: 'Product2',
      price: 80
    }]
    return <div>
      <h1 className='heads1'>Everything Else</h1>
      <main>
        <BootstrapTable data={products} striped hover>
          <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
        <ListGroup bsClass='lists'>
          <ListGroupItem header='Bjs BrewHouse' href='https://www.bjsrestaurants.com' />
          <ListGroupItem header='Pollo Tropical' href='http://pollotropical.com/home-page' />
          <ListGroupItem header='Glory Days' href='https://www.glorydaysgrill.com' />
          <ListGroupItem header='Cheddars' href='http://cheddars.com' />
          <ListGroupItem onClick={alertClicked} header='Pei Wei' href='https://www.peiwei.com' />
        </ListGroup>
      </main>
    </div>
  }
}
{ /* <Jumbotron className='lists'>
  <ButtonToolbar>
    <Button href='https://www.bjsrestaurants.com'>Bj's BrewHouse</Button>
    <Button href='http://pollotropical.com/home-page'>Pollo Tropical</Button>
    <Button href='https://www.glorydaysgrill.com'>Glory Days</Button>
    <Button href='http://cheddars.com'>Cheddars</Button>
    <Button href='https://www.peiwei.com'>Pei Wei</Button>
  </ButtonToolbar>
</Jumbotron> */ }
{ /* <Table bordered responsive>
  <thead>
    <tr responsive>
      <th>#</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</Table> */ }
