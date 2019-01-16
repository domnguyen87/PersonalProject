import React from 'react'

class WorkOutPlans extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            key: '',
            id: '',
            url: '',
            title: '',
            description: '',
            level: '',
            timeLength: '',
            img: '',
            author: '',
            data:[]
        }

    }

    componentDidMount() {
        
    }
    


    render() {

        return (
            <React.Fragment>
                {/* <div className="authentication-wrapper authentication-3"> */}
                <div className="authentication-wrapper authentication-3 ui-bg-cover ui-bg-overlay-container px-4" style={{ backgroundImage: "url('assets/img/bg/Gym1.jpg')" }}>
                <div className="container-fluid flex-grow-1 container-p-y" >
                {/* <div className="d-flex d-none d-lg-flex col-md-12 align-items-center ui-bg-cover ui-bg-overlay-container p-5y" style={{backgroundImage: "url('assets/img/bg/Gym1.jpg')"}}></div> */}
                <h4 className="d-flex flex-wrap align-items-end w-100 font-weight-bold pt-5 mb-1" >
                    <div className="col-12 col-md-3y px-0 pb-2 text-white"> WORKOUT PLANS </div>
                    <div className="col-12 col-md-3 px-0 pb-2">
                        <input type="text" className="form-control" placeholder="Search..." />
                    </div>
                </h4>
                        <ul className="nav bg-lighter container-p-x py-1 container-m--x mb-4">
                            <li className="nav-item">
                                <a className="nav-link text-white font-weight-bold pl-0" href="javascript:void(0)">All Plans</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white font-weight-bold pl-0" href="javascript:void(0)">Muscle Building</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white font-weight-bold pl-0" href="javascript:void(0)">Weight Loss</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white font-weight-bold pl-0" href="javascript:void(0)">Gain Strength</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white font-weight-bold pl-0" href="javascript:void(0)">Get Fit</a>
                            </li>
                        </ul>

                        {/* <div className="row">
                        {this.state.data.map((par) => {
                            return <WorkOutPlansComponent
                            key={par.id}
                            id={par.id}
                            url={par.url}
                            title={par.title}
                            description={par.description}
                            level={par.level}
                            timeLength={par.timeLength}
                            img={par.img}
                            author={par.author} />
                        })}
                        </div> */}

                    </div>
                </div>
            </React.Fragment>

        )
    }
}



export default WorkOutPlans