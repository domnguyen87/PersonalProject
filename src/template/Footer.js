import React from 'react'
import FooterLink from './FooterLink'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="layout-footer footer bg-footer-theme bg-dark" style={{ bottom:0 }}>
                    <nav className="d-flex justify-content-center" style={{height: "25px"}}>
                        <ul className='nav'>
                            <li className="nav-item">
                                <div className="nav-item m-2">
                                    <i className="fab fa-facebook"></i>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-item m-2">
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-item m-2">
                                    <i className="fab fa-twitter"></i>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <nav className="d-flex justify-content-center">
                        <ul className="nav">
                            <li className="nav-item">
                                <FooterLink path="/careers" name="Careers" />
                            </li>
                            <li className="nav-item">
                                <FooterLink path="/faq" name="FAQ" />
                            </li>
                            <li className="nav-item">
                                <FooterLink path="/contactus" name="Contact Us" />
                            </li>
                            <li className="nav-item">
                                <FooterLink path="/privacypolicy" name="Privacy Policy" />
                            </li>
                            <li className="nav-item">
                                <FooterLink path="/terms" name="Terms and Condition" />
                            </li>
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer