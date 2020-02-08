import { Route } from "react-router-dom";
import React, { Component } from "react";
// import Login from "./auth/Login";
import Home from "./components/home/Home"
import Profile from "./components/profile/Profile";
import ItemList from "./components/item/ItemList";
import AddItem from "./components/item/AddItem"
import EditItemForm from "./components/item/EditItemForm"


class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    render() {

        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home {...props} />
                  }} />
                <Route exact path="/item" render={(props) => {
                    return <ItemList {...props} />
                  }} />
                <Route exact path="/profile" render={(props) => {
                    return <Profile {...props} />
                  }} />
                <Route path="/AddItem" render={(props) => {
                    return <AddItem {...props} />
                  }} />
                <Route path="/item/:itemId(\d+)/edit" render={props => {
                    return <EditItemForm {...props} />
                  }} />
            </React.Fragment>
        )
    }
}
export default ApplicationViews;