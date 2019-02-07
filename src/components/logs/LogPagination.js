import React from 'react'

const LogPagination = props => {
    return (
        <div style={{ height: "1000px"}}>
            <nav>
                <button type="button" className="btn btn-outline-primary" onClick={props.pagePrevious}>«</button>
                <span> Page: {props.pageNumber} </span>
                <button type="button" class ="btn btn-outline-primary" onClick={props.pageNext}>»</button>
            </nav>
        </div>
    )
}

export default LogPagination