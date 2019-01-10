import React from 'react'
import FormErrors from './common/FormErrors'
import UserService from '../services/UserService'
import { Redirect } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'



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

        })
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }
            , () => { this.validateField(name, value) });
        console.log(this.state);
    }

    validateField = (name, value) => {
        let fieldErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (name) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!$%^&*-]).{8,}/)   //value.length >= 8;
                fieldErrors.password = passwordValid ? '' : 'must contain one uppercase letter, one special character and at least 8 characters long';
                break;
        }
        this.setState({
            formErrors: fieldErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, () => this.validateForm());
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

    render() {

        if (this.state.loginSuccess) {
            return (
                <Redirect to='/' />
            )
        }

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
                    <div className="d-none d-lg-flex col-lg-8 align-items-center ui-bg-cover ui-bg-overlay-container p-5" style={{backgroundImage: "url('assets/img/bg/city.jpg')"}}>
                      <div className="ui-bg-overlay opacity-50"></div>

                      {/* <!-- Text --> */}
                      <div className="w-100 text-white px-5">
                        <h1 className="display-2 font-weight-bolder mb-4">JOIN OUR COMMUNITY
                        </h1>
                        <div className="text-large font-weight-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula ex eu gravida faucibus. Suspendisse viverra pharetra purus. Proin fringilla ac lorem at sagittis.Proin tincidunt dui et nunc ultricies dignissim.
                        </div>
                      </div>
                      {/* <!-- /.Text --> */}
                    </div>
                    {/* <!-- / Side container --> */}

                    {/* <!-- Form container --> */}
                    <div className="d-flex col-lg-4 align-items-center bg-white p-5">
                      {/* <!-- Inner container --> */}
                      {/* <!-- Have to add `.d-flex` to control width via `.col-*` classes --> */}
                      <div className="d-flex col-sm-7 col-md-5 col-lg-12 px-0 px-xl-4 mx-auto">
                        <div className="w-100">

                          {/* <!-- Logo --> */}
                          <div className="w-100 position-relative" >
                              <img src="/assets/img/logo/avatar_purple.png" className="ui-w-100 rounded-circle"/>  
                          </div>
                          {/* <!-- / Logo --> */}

                          <h4>Login to Your Account</h4>

                          {/* <!-- Form --> */}
                          <form className="my-5">
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
                                <span className="custom-control-label">Remember me</span>
                              </label>
                              <button type="button" className="btn btn-primary">Sign In</button>
                            </div>
                          </form>
                          {/* <!-- / Form --> */}

                          <div className="text-center">
                            Don't have an account yet?
                            <a href="javascript:void(0)">Sign Up</a>
                          </div>
                          <div className="main hc-element-invisible animated hc-element-visible fadeInUpSmall" data-animation-effect="fadeInUpSmall" data-effect-delay="100">
                <div className="form-block p-30 light-gray-bg border-clear">
                  <h2 className="title">Sign Up</h2>
                  <form className="form-horizontal">
                    <div className="form-group has-feedback row">
                      <label for="inputName" className="col-md-3 control-label text-md-right col-form-label">First Name <span className="text-danger small">*</span></label>
                      <div className="col-md-8">
                        <input type="text" className="form-control" id="inputName" placeholder="Fisrt Name" required="" />
                        <i className="fa fa-pencil form-control-feedback pr-4"></i>
                      </div>
                    </div>
                    <div className="form-group has-feedback row">
                      <label for="inputLastName" className="col-md-3 control-label text-md-right col-form-label">Last Name <span className="text-danger small">*</span></label>
                      <div className="col-md-8">
                        <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" required=""/>
                        <i className="fa fa-pencil form-control-feedback pr-4"></i>
                      </div>
                    </div>
                    <div className="form-group has-feedback row">
                      <label for="inputUserName" className="col-md-3 control-label text-md-right col-form-label">User Name <span className="text-danger small">*</span></label>
                      <div className="col-md-8">
                        <input type="text" className="form-control" id="inputUserName" placeholder="User Name" required=""/>
                        <i className="fa fa-user form-control-feedback pr-4"></i>
                      </div>
                    </div>
                    <div className="form-group has-feedback row">
                      <label for="inputEmail" className="col-md-3 control-label text-md-right col-form-label">Email <span className="text-danger small">*</span></label>
                      <div className="col-md-8">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" required=""/>
                        <i className="fa fa-envelope form-control-feedback pr-4"></i>
                      </div>
                    </div>
                    <div className="form-group has-feedback row">
                      <label for="inputPassword" className="col-md-3 control-label text-md-right col-form-label">Password <span className="text-danger small">*</span></label>
                      <div className="col-md-8">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" required=""/>
                        <i className="fa fa-lock form-control-feedback pr-4"></i>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="ml-md-auto col-md-9">
                        <div className="checkbox form-check">
                          <input className="form-check-input" type="checkbox" required=""/>
                          <label className="form-check-label">
                             Lorem ipsum <a href="#">dolor sit</a> and <a href="#">ametetot unamliage</a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="ml-md-auto col-md-9">
                        <button type="submit" className="btn btn-group btn-default btn-animated">Sign Up <i className="fa fa-check"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

                        </div>
                      </div>
                    </div>
                    {/* <!-- / Form container --> */}

                  </div>
                </div>

                {/* <!-- / Content --> */}

            </React.Fragment>
        )
    }
}

export default Login