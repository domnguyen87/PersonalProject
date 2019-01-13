import React from 'react'
import CareersComponent from './CareersComponent'

class Careers extends React.Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <React.Fragment>
                <div className="d-none d-lg-flex col-md-12 align-items-center ui-bg-cover ui-bg-overlay-container p-5" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}>
                      <div className="ui-bg-overlay opacity-"></div>
                <div className="layout-content">
                    <div className="container-fluid flex-grow-1 container-p-y">
                        <div class="container px-0">
                            <h2 className="text-center font-weight-bolder pt-5">
                                Find a Career You'll Love
                            </h2>
                            <div className="text-center text-muted text-big mx-auto mt-3" style={{maxWidth: "500px"}}>
                                Innovate to Inspire
                            </div>

                            <div className="card mt-5">
                                {/* {this.state.data.map((par) => {
                                    return <CareersComponent
                                    />
                                })} */}
                                <CareersComponent/>
                                <hr className="border-light m-0"></hr>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Careers