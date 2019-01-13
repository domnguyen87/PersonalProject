import React from 'react'

const WorkOutPlansComponent = props => {

    return (
        <div key={props.id} id={props.id}>
            <div className="col-sm-6 col-xl-4">
                <div className="card mb-4">
                    <div className="w-100">
                    <a href="" className="card-img-top d-block ui-rect-60 ui-bg-cover" style={{backgroundImage: props.img}}></a>
                    </div>
                    <div className="card-body">
                        <h4 className="mb-3">
                            <a href={props.url} className="text-dark">{props.title}</a>
                        </h4>
                        <h5 className="mb-3">
                            {props.author}
                        </h5>
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