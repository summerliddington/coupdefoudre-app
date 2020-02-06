import { Route } from "react-router-dom";
import React, { Component } from "react";
// import Login from "./auth/Login";
import Home from "./components/home/Home"
import Profile from "./components/profile/Profile";
import ItemList from "./components/itemFeed/ItemList";
import AddItem from "./components/itemFeed/AddItem"
import EditItemForm from "./components/itemFeed/EditItemForm"


class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    render() {

        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home {...props} />
                  }} />
                <Route path="/itemFeed" render={(props) => {
                    return <ItemList {...props} />
                  }} />
                <Route exact path="/profile" render={(props) => {
                    return <Profile {...props} />
                  }} />
                <Route path="/item/new" render={(props) => {
                    return <AddItem {...props} />
                  }} />
                <Route path="/item/:userId(\d+)/edit" render={props => {
                    return <EditItemForm {...props} />
                  }} />
            </React.Fragment>
        )
    }
}
export default ApplicationViews;