import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import { Nav, NavItem, NavLink } from 'reactstrap';

import './NavFooter.css'

class NavFooter extends Component {
  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push('/login');
}
render(){

    return (
      <div className="footerLinks">
          <Nav>
            <NavItem>
              <NavLink className="nav-link" href="/"><img id="homeIcon" src={require('./home-icon.png')} alt="Home Button"/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="./AddItem"> <img id="addIcon" src={require('./add-icon.png')} alt="Add Button"/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="./profile"><img id="profileIcon" src={require('./profile-icon.png')} alt="Profile Button"/></NavLink>
            </NavItem>
          </Nav>
          </div>
    )
  }
}
export default withRouter(NavFooter);