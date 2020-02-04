import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";
import NavTop from "./components/nav/NavTop"
import NavFooter from "./components/nav/NavFooter";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";


class App extends Component {
  state = {
    user: false,
    currentUser: ""
  }
  // Check if credentials are in session storage
  //returns true/false
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  setUser = (authObj) => {
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    sessionStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    this.setState({
      user: this.isAuthenticated(),
      currentUser:sessionStorage.getItem("credentials")
    });
  }

  clearUser = () => {
    sessionStorage.clear()

    this.setState({
      user: this.isAuthenticated()
    });

  }
  componentDidMount() {
    if(this.isAuthenticated()){
      this.setState({
        user: this.isAuthenticated(),
        currentUser:sessionStorage.getItem("credentials"), 
        userName: sessionStorage.getItem("name")
      })

    }else{
      this.setState({
        user: this.isAuthenticated()
      })
    }

  }

  render() {
    // console.log(this.state.currentUser)
    return (
      <React.Fragment>
        {(this.state.user) ?
          <>
            <NavTop
              user={this.state.user}
              isAuthenticated={this.isAuthenticated}
              clearUser={this.clearUser}
            />
            <NavFooter
              user={this.state.user}
              isAuthenticated={this.isAuthenticated}
              clearUser={this.clearUser}
            />
            <ApplicationViews
              user={this.state.user}
              isAuthenticated={this.isAuthenticated}
              currentUser={this.state.currentUser}
                />
          </>
          : <><div className="logRegContainer">
            <Login setUser={this.setUser}
                    currentUser={this.state.currentUser} />
            <Register {...this.props}setUser={this.setUser} />
          </div>
          </>}
      </React.Fragment>
    );
  }
}

export default App;