import React, {Component} from 'react'
import { PageHeader } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Layout extends Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  render () {
    return <div>
      <LinkContainer to='/'>
        <PageHeader className='head'>
          <div>
            <h1>Food-Dot-Com</h1>
          </div>
        </PageHeader>
      </LinkContainer>
      <main>
        {this.props.children}
      </main>
    </div>
  }
}
