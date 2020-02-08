import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import APImanager from "../../modules/APIManager";
import "./Profile.css";
import MyItemsList from '../home/MyItemsList';



class Profile extends Component {
    state = {
        user: {}
    }

    componentDidMount = () => {
        let userId = sessionStorage.getItem("credentials")
        APImanager.get("users", userId)
        .then((res) => this.setState({user: res}))

    }

    render(){
        return(
            <>
            <div className="profile">
              <h2>Hey, {this.state.user.name} this is your Profile page!</h2>
                <h2>User Email: {this.state.user.email}</h2>
                <div className="itemsListContainer">
                    <MyItemsList {...this.props}/>
                </div>
                </div>
                </>
        )
    }
}

export default withRouter(Profile);