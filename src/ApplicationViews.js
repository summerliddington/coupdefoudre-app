import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Login from './auth/Login'
import Home from './home/Home'

export default class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null
    render() {
      return (
        <React.Fragment>
            <Route exact path="/login" render={props => {
                  return <Login setUser={this.props.setUser} {...props} />
            }} />
            <Route exact path="/" render={props => {
              return <Home setUser={this.props.setUser} currentUserId={this.props.currentUserId} {...props} />
            }} />
            </React.Fragment>
    );
}
}