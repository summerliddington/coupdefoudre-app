import { Route } from "react-router-dom";
import React, { Component } from "react";
// import MyClosetList from '../mycloset/MyClosetList';
// import OtherClosetList from '../findNewClothes/OtherClosetList';
// import Login from "./auth/Login";
import Home from "./components/home/Home"


class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    render() {
        // console.log(this.props.currentUser)
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home {...props} />
                  }} />
            {/* <Route exact path="/myCloset" render={(props) => {
                return <MyClosetList key={this.props.currentUser} currentUser={this.props.currentUser} {...props} />
              }} />
              <Route exact path="/findNewClothes" render={(props) => {
                return <OtherClosetList currentUser={this.props.currentUser}{...props} />
              }} /> */}
            </React.Fragment>
        )
    }
}
export default ApplicationViews;