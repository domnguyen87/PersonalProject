import React from 'react'
import FormErrors from './common/FormErrors'
import UserService from '../services/UserService'
import { Redirect } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { withRouter } from 'react-router-dom';



class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            emailValid: false,
            passwordValid: false,
            formValid: false,
            formErrors: {
                email: '',
                password: ''
            },
            loginValid: false,
            loginSuccess: false,
            modal: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        })
    }

    handleChange = evt => {
        const key = evt.target.name;
        const value = evt.target.value;
        this.setState({ 
          [key]: value 
        }, this.validateField(key, value))
    }

    validateField = (key, value) => {
        let fieldErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (key) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!$%^&*-]).{8,}/)   //value.length >= 8;
                fieldErrors.password = passwordValid ? '' : 'Password is required';
                break;
        }

        this.setState({
            formErrors: fieldErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid
                && this.state.passwordValid
        });
    }

    handleClick = evt => {
        console.log('login clicked')
        // const data = {
        //     email: this.state.email,
        //     password: this.state.password
        // }
        UserService.login(this.state, this.onLoginSuccess, this.onLoginError)
    }

    onLoginSuccess = (resp) => {
        console.log(resp);
        this.props.history.push('/')
        // this.setState({ loginSuccess: true })
    }

    onLoginError = err => {
        console.log(err);
        alert('Email and/or Password was incorrect')
    }

    signUpClicked = evt => {
        //evt.preventDefault();
        this.props.history.push('/register')
        //<Redirect to='/register' />
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
                    <div className="d-none d-lg-flex col-md-12 align-items-center ui-bg-cover ui-bg-overlay-container p-5" style={{backgroundImage: "url('assets/img/bg/Pool2.jpg')"}}>
                      <div className="ui-bg-overlay opacity-"></div>

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
                      <div className="d-flex col-md-5 px-0 px-xl-4 mx-auto">
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
                              <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label className="form-label d-flex justify-content-between align-items-end">
                                <div>Password</div>
                                <a href="javascript:void(0)" className="d-block small">Forgot password?</a>
                              </label>
                              <input type="password" className="form-control"/>
                            </div>
                            <div className="d-flex justify-content-between align-items-center m-0">
                              <label className="custom-control custom-checkbox m-0">
                                <input type="checkbox" className="custom-control-input"/>
                                <span className="custom-control-label display-5">Remember me</span>
                              </label>
                              <button type="button" className="btn btn-primary">Sign In</button>
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

            </React.Fragment>
        )
    }
}

export default Login