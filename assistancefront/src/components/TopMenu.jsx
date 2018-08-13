import React, { PureComponent, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Segment, Image, Dropdown } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import gravitarUrl from 'gravatar-url';
class TopMenu extends PureComponent {
    render() {
      const isLoggedIn = Object.keys(this.props.user).length > 1 ? true : false
  
      return (
        <Menu secondary pointing>
        <Menu.Item as={Link}to ="/dashbord">Dashbord</Menu.Item>
        <Menu.Menu position="right"></Menu.Menu>
        <Dropdown trigger={<Image avatar src={gravitarUrl(user.email)}/>}>
        <Dropdown.Item as={Link}to= "/Home">Home</Dropdown.Item>
        <Dropdown.Item as={Link}to= "/Home">Home</Dropdown.Item>
        </Dropdown>

        </Menu>
      )
    }
  }
  export default TopMenu;