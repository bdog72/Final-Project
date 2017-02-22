import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
export default class Burgers extends Component {
  render () {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}
    return <div>
      <h1 className='heads1'>Burgers</h1>
      <main>
        <div className='well' style={wellStyles}>
          <Button bsSize='large' href='http://www.burgermonger.com' block>Burger Monger</Button>
        </div>
      </main>
    </div>
  }
}
