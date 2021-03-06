import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import ItemList from "../item/ItemList"
import APImanager from "../../modules/APIManager";
import "./Home.css";



class Home extends Component {
    state = {
        user: {}
    }
    componentDidMount = () => {
        let userId = sessionStorage.getItem("credentials")
        APImanager.get("users", userId)
        .then((res) => this.setState({user: res}))

    }

    render(){
        console.log(parseInt(sessionStorage.getItem("credentials")))
        return(
            <>
            <div className="home">
              <h2>Hey, {this.state.user.name}!</h2>
                <div>This is your Feed</div>
                < ItemList {...this.props}
                userId={parseInt(sessionStorage.getItem("credentials"))} />
                </div>
                </>
        )
    }
}

export default withRouter(Home);