import React from 'react'
import InputComponent from './common/inputComponent'

const RegistrationForm = props => (
    <React.Fragment>
        <div>
            <p>Registration</p>
            <InputComponent
                name="firstName"
                type="text"
                value={props.firstName}
                placeholder="Type your first name here"
                onChange={props.onChange} />
            <InputComponent
                name="lastName"
                type="text"
                value={props.lastName}
                placeholder="Type your last name"
                onChange={props.onChange} />
            <InputComponent
                name="email"
                type="email"
                value={props.email}
                placeholder="Type your email"
                onChange={props.onChange} />
            <InputComponent
                name="password"
                type="password"
                value={props.password}
                placeholder="Type your password"
                onChange={props.onChange} />
            <InputComponent
                name="confirmPassword"
                type="password"
                value={props.confirmPassword}
                placeholder="Please retype your password"
                onChange={props.onChange} />
            <div>
                <button disabled={!props.disabled} onClick={props.onClick}>Submit</button>
            </div>
        </div>
    </React.Fragment>
)


export default RegistrationForm
