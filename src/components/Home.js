import React from "react";
import UserService from '../services/UserService'
import {Redirect} from 'react-router-dom'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      userId: "",
      isLoggedIn: false
    }
    UserService.getCurrentUser(this.getUserSuccess, this.getUserError)
  }

  getUserSuccess = (resp) => {
    console.log(resp.data.item.user.name);
    this.setState({
      isLoggedIn: true,
      username: resp.data.item.user.name,
      userId: resp.data.item.actualUserId

    })
    console.table(this.state)
  }
  getUserError = (err) => {
    console.log(err);
  }


  handleClick = evt => {
    console.log('logout clicked')
    UserService.logoutUser(this.getLogoutSuccess, this.getLogoutError)
  }

  getLogoutSuccess = (resp) => {
    console.log(resp)
    this.props.history.push("/login")
  }

  getLogoutError = err => {
    console.log(err)
  }

  render() {
if(!this.state.isLoggedIn){
  return <h1>Hi</h1>
} else {
    return (
      <React.Fragment>
        <div>Username: {this.state.username}</div>
        <div>UserId: {this.state.userId}</div>
        <div>
          <button onClick={this.handleClick}>Log Out</button>
        </div>
      </React.Fragment>
    )
  }
}
}

export default Home;

