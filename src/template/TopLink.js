import React from 'react'
import {BroswerRouter as Router, Link } from 'react-router-dom'

const TopLink = props => {

    return (
        <React.Fragment>
            <div className="topnav nav-item m-2">
                <Link className="font-weight-bold" to={props.path} style={{ color: "#dbdbdb", fontFamily: "Thasadith", fontSize: "medium"}}>{props.name}</Link>
            </div>
        </React.Fragment>

    );
}

export default TopLink