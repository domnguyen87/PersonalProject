import React from 'react'
import FormErrors from './common/FormErrors'
import UserAccountService from '../services/UserAccountService'
import { Redirect } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { withRouter } from 'react-router-dom';
import qs from 'qs'
import SweetAlert from 'react-bootstrap-sweetalert'



class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          email:"",
          password:"",
          sweetAlertAddShow: false,
            
        }
    }


    handleChange = evt => {
      const key = evt.target.name
      const val = evt.target.value
      this.setState({
        [key]: val
      })
    }

    onLoginSuccess = (resp) => {
        console.log(resp);
        this.props.history.push('/profile')
        // this.setState({ loginSuccess: true })
    }

    onLoginError = err => {
        console.log(err);
        //alert('Email and/or Password was incorrect')
        this.setState({
          sweetAlertAddShow:true
        })
    }

    loginClicked = evt => {
      evt.preventDefault();
        var qs = require('qs')
        const data = qs.stringify({
          username: this.state.email,
          password: this.state.password,
          grant_type: 'password'
        })
        console.log(data)
        UserAccountService.login(data, this.onLoginSuccess, this.onLoginError)
    }

    signUpClicked = evt => {
        evt.preventDefault();
        this.props.history.push('/register')
        //<Redirect to='/register' />
        
    }

    sweetAlertHide = () => {
      this.setState({
          sweetAlertAddShow: false,
      });
  }

    render() {

        // if (this.state.loginSuccess) {
        //     return (
        //         <Redirect to='/' />
        //     )
        // }

        return (
            <React.Fragment>
                {/* <div>
                    <label>Email: </label>
                    <input name="email"
                        type="email"
                        placeholder="Enter Your Email"
                        value={this.state.email}
                        onChange={this.handleChange} />
                </div>
                <div>
                    <label>Passsword: </label>
                    <input name="password"
                        type="password"
                        placeholder="Enter Your password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                </div>
                <div>
                    <button disabled={!this.state.formValid} onClick={this.handleClick}>Login</button>
                </div>
                <FormErrors formErrors={this.state.formErrors} /> */}
                {/* <!-- Content --> */}

                <div className="authentication-wrapper authentication-3">
                  <div className="authentication-inner">

                    {/* <!-- Side container --> */}
                    {/* <!-- Do not display the container on extra small, small and medium screens --> */}
                    <div className="d-none d-lg-flex col-md-12 align-items-center ui-bg-cover ui-bg-overlay-container p-5" style={{backgroundImage: "url('assets/img/bg/contacts.jpg')"}}>
                      

                      {/* <!-- Text --> */}
                      <div className="w-100 text-white px-5">
                        <h1 className="display-2 font-weight mb-1">WELCOME
                        </h1>
                        {/* <div className="text-large font-weight-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula ex eu gravida faucibus. Suspendisse viverra pharetra purus. Proin fringilla ac lorem at sagittis.Proin tincidunt dui et nunc ultricies dignissim.
                        </div> */}
                        {/* <!-- Form container --> */}
                    <div className="align-items-center p-1">
                      {/* <!-- Inner container --> */}
                      {/* <!-- Have to add `.d-flex` to control width via `.col-*` classes --> */}
                      <div className="d-flex col-md-3 px-0 px-xl-4 mx-auto">
                        <div className="w-100">

                          {/* <!-- Logo --> */}
                          {/* <div className="w-100 position-relative" >
                              <img src="/assets/img/logo/avatar_purple.png" className="ui-w-100 rounded-circle"/>  
                          </div> */}
                          {/* <!-- / Logo --> */}

                          {/* <!-- Form --> */}
                          <form className="my-3">
                            <div className="form-group">
                              <label className="form-label d-flex justify-content-between align-items-end">Email</label>
                              <input 
                                type="text"
                                name="email" 
                                className="form-control"
                                value={this.state.email}
                                onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                              <label className="form-label d-flex justify-content-between align-items-end">
                                <div>Password</div>
                                <a href="javascript:void(0)" className="d-block small">Forgot password?</a>
                              </label>
                              <input 
                                type="password"
                                name="password" 
                                className="form-control"
                                value={this.state.password}
                                onChange={this.handleChange}
                                />
                            </div>
                            <div className="d-flex justify-content-between align-items-center m-0">
                              <label className="custom-control custom-checkbox m-0">
                                <input type="checkbox" className="custom-control-input"/>
                                <span className="custom-control-label display-5">Remember me</span>
                              </label>
                              <button type="button" className="btn btn-primary" onClick={this.loginClicked}>Sign In</button>
                            </div>
                          </form>
                          {/* <!-- / Form --> */}

                          <div className="text-center">
                            Don't have an account yet?
                            <button type="button" className="btn btn-link" onClick={this.signUpClicked}>Sign Up</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- / Form container --> */}
                      </div>
                      {/* <!-- /.Text --> */}
                    </div>
                    {/* <!-- / Side container --> */}

                    

                  </div>
                </div>

                {/* <!-- / Content --> */}

                < SweetAlert
                  warning 
                  title="Wrong Password" 
                  show={this.state.sweetAlertAddShow} 
                  onConfirm={this.sweetAlertHide}>
                </SweetAlert >

            </React.Fragment>
        )
    }
}

export default Login