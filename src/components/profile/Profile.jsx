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
                                <img src="assets/img/avatars/5.png" alt class="d-block ui-w-100 rounded-circle" />
                                <div className="media-body ml-5">
                                    <h4 className="font-weight-bold mb-4">Nellie Maxwell</h4>
                                    <div className="text-muted mb-4">
                                    Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad harum primis electram duo, porro principes ei has.
                                    </div>
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
                                <div className="row">
                                    <div className="text-muted small">Name:Dom</div>
                                    <div className="text-muted small">Age:33</div>
                                    <div className="text-muted small">Gender:Male</div>
                                    <div className="text-muted small">Location:Orange County</div>
                                    <div className="text-muted small">Member Since:2008</div>
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