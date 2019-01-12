import React from 'react'
import {BroswerRouter as Router, Link } from 'react-router-dom'

const TopLink = props => {

    return (
        <React.Fragment>
            <div className="topnav nav-item m-2">
                <Link className={props.className} to={props.path}>{props.name}</Link>
            </div>
        </React.Fragment>

    );
}

export default TopLink