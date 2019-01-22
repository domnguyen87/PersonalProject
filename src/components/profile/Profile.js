import React from 'react'


class profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        
    }

    render() {

        return (
            <React.Fragment>
                <div className="layout-container col-md-8 offset-md-2">
                <div class="layout-content ">
                    <div class="container-fluid flex-grow-1 container-p-y">
                    
                    {/* HEADER */}
                        <div className="bg-white container-m--x container-m--y mb-4">
                            <div className="media col-md-10 col-lg-8 col-xl-7 py-5 mx-auto">
                                <img src="/assets/img/avatars/rock.png" width="25%" alt="" className="ui-w-55 rounded-circle" />
                                <div className="media-body ml-5 text-left">
                                    <h4 className="font-weight-bold mb-4">Dom Nguyen</h4>
                                    <div className="text-muted mb-4 small">
                                    Cardio? Ain't nobody got time for that
                                    </div>
                                    <div className="row small justify-content-sm-between">
                                      <a href="javascript:void(0)" class="d-block text-dark mb-2">
                                        <i class="ion ion-logo-twitter ui-w-30 text-center text-twitter"></i> @nmaxwell
                                      </a>
                                      <a href="javascript:void(0)" class="d-block text-dark mb-2">
                                        <i class="ion ion-logo-facebook ui-w-30 text-center text-facebook"></i> nmaxwell
                                      </a>
                                      <a href="javascript:void(0)" class="d-block text-dark mb-0">
                                        <i class="ion ion-logo-instagram ui-w-30 text-center text-instagram"></i> nmaxwell
                                      </a>
                                      </div>
                                      <a href="javascript:void(0)" class="btn btn-primary btn-round">+&nbsp; Follow</a>
                                      &nbsp;
                                      <a href="javascript:void(0)" class="btn btn-primary btn-round">DM me</a>
                                </div>
                            </div>
                            <hr class="m-0" />
                        </div>
                    {/* END HEADER */}

                    {/* BODY */}
                        <div className="row">

                        {/* LEFT SIDE */}
                            <div className="col-md-3">
                                <div className="card mb-4">
                                <div className="card-body">
                                <div className="text-left" style={{fontSize:"15px"}}>
                                    <div className="text">Name:Dom</div>
                                    <div className="text">Age:33</div>
                                    <div className="text">Gender:Male</div>
                                    <div className="text">Location:Orange County</div>
                                    <div className="text">Member Since:2008</div>
                                </div>
                                </div>
                                </div>
                            </div>

                        {/* MIDDLE  */}
                            <div className="col-md-6">
                                <div className="card mb-4">
                                <div className="card-body">
                                    <div className="text-muted">Name:Dom</div>
                                </div>
                                </div>
                            </div>

                        {/* RIGHT SIDE */}
                             <div className="col-md-3">
                                <div className="card mb-4">
                                <div className="card-header with-elements">
                                  <span className="card-header-title">Photos</span>
                                  <div className="card-header-elements ml-2">
                                    <small className="text-muted">54</small>
                                  </div>
                                  <div className="card-header-elements ml-md-auto">
                                    <a href="javascript:void(0)" className="btn btn-default md-btn-flat btn-xs">Show More</a>
                                  </div>
                               </div>
                                     {/*<div className="row no-gutters align-items-start pt-1 pl-1">
                                      <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                                        <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span>
                                      </a>
                                      <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                                        <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span>
                                      </a>
                                      <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                                        <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span>
                                      </a>
                                      <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                                        <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span>
                                      </a>
                                      <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                                        <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span>
                                      </a>
                                      <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                                        <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span>
                                      </a>
                                      <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                                        <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span>
                                      </a>
                                      <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                                        <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span>
                                      </a>
                                      <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                                        <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span>
                                      </a>
                                      <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                                        <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span>
                                      </a>
                                      <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                                        <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span>
                                      </a>
                                      <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                                        <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span>
                                      </a>
                                      <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                                        <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span>
                                      </a>
                                      <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                                        <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span>
                                      </a>
                                      <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                                        <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span>
                                      </a>
                                      <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                                        <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span>
                                      </a>
                                    </div>*/}
                                </div>
                                </div>
                            </div> 


                    </div>
                </div>
                </div>
            </React.Fragment>



        )
    }

}

export default profile