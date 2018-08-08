import React, { PureComponent, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Segment, Image } from 'semantic-ui-react';
class TopMenu extends PureComponent {
    render() {
      const isLoggedIn = Object.keys(this.props.user).length > 1 ? true : false
  
      return (
        <Segment inverted style={{height:'80px'}}>
          <Menu inverted secondary>
            <Menu.Item
              header
              name="Home"
              onClick={() => {
                this.props.history.push('/')
              }}
            >
             
              Neighborhood
            </Menu.Item>
            {isLoggedIn&&
              <Fragment>
            <Menu.Item
              name="Dashboard"
              onClick={() => {
                this.props.history.push('/dashboard')
              }}
            >
              Dashboard
            </Menu.Item>
  
            <Menu.Menu position="right">
              {}
              <Menu.Item
                name="Add Request"
                onClick={() => {
                  this.props.history.push('/request')
                }}
              />
            </Menu.Menu>
                </Fragment>}
          </Menu>
        </Segment>
      )
    }
  }
  export default TopMenu;