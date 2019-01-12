import React from 'react'
import TopLink from './TopLink'
import { Link } from 'react-router-dom'

class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <React.Fragment>
                <nav className="layout-navbar navbar navbar-expand-lg align-items-lg-center bg-navbar-theme bg-dark container-p-x" id="layout-navbar" style={{ position: "fixed", width: "100%", top: 0 }}>

                    <Link to="/login">
                        <img src="assets/img/logo/fitness.png" className="d-block ui-w-80" />
                    </Link>
                    <TopLink path="/class" name="Classes" />
                    <TopLink path="/workoutplans" name="Work Out Plans"  />
                    <TopLink path="/contacts" name="Personal Training"  />
                    <TopLink path="/store" name="Store"  />
                
                    {/* <div className="navbar-nav align-items-lg-center justify-content-right"> */}
                    <div className="navbar-nav align-items-lg-center ml-auto">
                        <TopLink path="/support" name="Support" />
                        <TopLink path="/register" name="Register"  />
                        <TopLink path="/login" name="LogIn"  />
                        
                        
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default TopNav