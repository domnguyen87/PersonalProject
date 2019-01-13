import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const FooterLink = props => {

    return(
        <React.Fragment>
            <div className="topnav nav-item m-2">
                <Link className="font-weight-bold" to={props.path} style={{color: "white", fontFamily: "Thasadith", fontSize: "small" }}>{props.name}</Link>
            </div>
        </React.Fragment>
    )
}

export default FooterLink