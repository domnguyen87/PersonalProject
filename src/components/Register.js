import React from 'react'
import UserService from '../services/UserService'
import RegistrationForm from './RegistrationForm'
import FormErrors from './common/FormErrors'
import  { Redirect } from 'react-router-dom'

// creating  smart component
// has a life cycle

// SETTING THE DEFAULT STATE OF THE PAGE
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            formErrors: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            firstNameValid: false,
            lastNameValid: false,
            emailValid: false,
            passwordValid: false,
            confirmPasswordValid: false,
            isFormValid: false,
            registerSuccessful: false
        }
    }

    // FUNCTIONS
    handleClick = evt => {
        // console.log('register.handleClick Event')
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            passwordConfirm: this.state.confirmPassword
        }
        UserService.register(data, this.onRegisterSuccess, this.onRegisterError)
    }
    onRegisterSuccess = resp => {
        console.log(resp)
        // this.setState({registerSuccessful: true})
        this.props.history.push("/login")
    }
    onRegisterError = err => {
        console.log(err)
    }

    // handleChange = evt => {
    //     const key = evt.target.name;
    //     const val = evt.target.value;
    //     this.setState({
    //         [key]: val
    //     }, this.validateField(key, val))
    // }

    // validateField = (key, val) => {
    //     console.log(key)
    //     console.log(val)
    //     if (val.length < 2)
    //         this.setState({ errMsg: `${key} requires at least 2 characters` }, this.validateForm)
    //     else
    //         this.setState({ errMsg: "" }, this.validateForm)
    // }

    // validateForm = () => {
    //     if (this.state.firstName.length > 2 && this.state.lastName.length > 2)
    //         this.setState({ isFormValid: true })
    //     else
    //         this.setState({ isFormValid: false })
    // }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
        console.log(this.state);
    }

    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;

        switch (fieldName) {
            case 'firstName':
                firstNameValid = value.length > 2;
                fieldValidationErrors.firstName = firstNameValid ? '' : 'First Name must be longer than 2 characters';
                break;
            case 'lastName':
                lastNameValid = value.length > 2;
                fieldValidationErrors.lastName = lastNameValid ? '' : 'Last name must be longer than 2 characters';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'email is invalid';
                break;
            case 'password':
                passwordValid = value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!$%^&*-]).{8,}/)   //value.length >= 8;
                fieldValidationErrors.password = passwordValid ? '' : 'must contain one uppercase letter, one special character and at least 8 characters long';
                break;
            case 'confirmPassword':
                confirmPasswordValid = (value === this.state.password)//value.match(this.state.password);
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : 'must be the same';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid,
            emailValid: emailValid,
            passwordValid: passwordValid,
            confirmPasswordValid: confirmPasswordValid
        }, () => this.validateForm());
    }

    validateForm() {
        this.setState({
            isFormValid:
                this.state.firstNameValid
                && this.state.lastNameValid
                && this.state.emailValid
                && this.state.passwordValid
                && this.state.confirmPasswordValid
        });
    }

    render() {
        // if (this.state.registerSuccessful) {
        //     return(
        //     <Redirect to="/login" />
        //     )
        // }
        // console.log("this is the render method")
        // console.table(this.state)
        return (
            <React.Fragment>
                <RegistrationForm
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    password={this.state.password}
                    passwordConfirm={this.state.passwordConfirm}
                    onChange={this.onChange}
                    onClick={this.handleClick}
                    disabled={this.state.isFormValid}
                />
                <FormErrors formErrors={this.state.formErrors} />
                
            </React.Fragment>
        )
    }
}

export default Register
