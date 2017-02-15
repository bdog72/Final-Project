import React, {Component} from 'react'
import {PageHeader} from 'react-bootstrap'
import Thumbnails from './Thumbnails'
import {Button, Menu} from 'semantic-ui-react'
import {Link} from 'react-router'
// import Toggle from './ToggleButton'
export default class Layout extends Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  render () {
    return <div>
      <PageHeader className='head'>
        <p>Rest-au-rant</p>
        <Button floated='left' size='huge'>
          <Menu.Item as={Link} to='/'>Home</Menu.Item>
        </Button>
      </PageHeader>
      <Thumbnails />
      {/* <Toggle /> */}
      <main>
        {this.props.children}
      </main>
    </div>
  }
}
