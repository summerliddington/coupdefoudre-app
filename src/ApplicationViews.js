import { Route } from "react-router-dom";
import React, { Component } from "react";
// import Login from "./auth/Login";
import Home from "./components/home/Home"
import Profile from "./components/profile/Profile";


class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    render() {
        // console.log(this.props.currentUser)
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home {...props} />
                  }} />
                <Route exact path="/profile" render={(props) => {
                    return <Profile {...props} />
                  }} />

            </React.Fragment>
        )
    }
}
export default ApplicationViews;