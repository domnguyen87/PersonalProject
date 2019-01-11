import React from 'react'

const WorkOutPlansComponent = props => {

    return (
        <div key={props.id} id ={props.id}>
            <div className="col-sm-6 col-xl-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <h4 className="mb-3">
                            <a href={props.url} className="text-dark">{props.title}</a>
                        </h4>
                        <p className="text-muted mb-3">{props.description}</p>
                        <div className="media-body">{props.level}</div>
                        <div className="text-muted small">{props.timeLength}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkOutPlansComponent