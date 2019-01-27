import React from 'react'

const CareersComponent = props => {

    return (
        <div key={props.Id} id={props.Id} className="p-1" style={{ fontfamily: "Thasadith", fontSize: "medium",}}>
            <div className="text-dark font-weight-bold d-flex flex-wrap mt-3" style={{ fontSize: "150%" }}>
                {props.Title}
                <button type="button" className="btn btn-link" onClick={() => props.onDelete(props.Id)}>-</button> 
            </div>
            <div className="d-flex flex-wrap mt-3">
                <div className="mr-3">
                    <i className="vacancy-tooltip ion ion-md-business" title="department"></i>&nbsp;
                    {props.Department}
                </div>
                <div className="mr-3">
                    <i className="vacancy-tooltip ion ion-md-time text-primary" title="Employment"></i>&nbsp; 
                    {props.Time}
                </div>
            </div>
            <div className="mt-3 mb-4 d-flex flex-wrap text-left">
                {props.Description}
            </div>
            <button type="button" className="btn btn-primary btn-round d-flex flex-wrap mt-3">Learn More</button>
        </div>
        
    )
}

export default CareersComponent