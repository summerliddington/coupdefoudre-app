import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavFooter.css'

class NavFooter extends Component {
  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push('/login');
}
render(){

    return (
      <header>
          <nav className="footerContainer">
            <ul className="footerLinks">
              <li><Link className="nav-link" to="/"><img id="homeIcon" src={require('./home-icon.png')} alt="Home Button"/></Link></li>
              <li><Link className="nav-link" to="./AddItem"><img id="addIcon" src={require('./add-icon.png')} alt="Add Button"/></Link></li>
              <li><Link className="nav-link" to="./profile"><img id="profileIcon" src={require('./profile-icon.png')} alt="Profile Button"/></Link></li>

            </ul>
          </nav>
      </header>
    )
  }
}
export default withRouter(NavFooter);