import React from 'react'
import ProfileService from '../../services/ProfileService'


class profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName:'',
            lastName:'',
            gender:'',
            age:'',
            location:'',
            headLine:'',
            twitter:'',
            facebook:'',
            instagram:'',
            height:'',
            weight:'',
            bodyFat:'',
            modal:false,
            data=[],
            id:4
        }

        this.toggle = this.toggle.bind(this)
    }

    componentDidMount() {
        ProfileService.getByIdProfile(4, this.profileSuccess, this.profileError)
    }

    profileSuccess = resp => {
      console.log(resp)
      this.setState({
        
      })
    }

    submitClicked = evt => {
      evt.preventDefault();
      const data = {
          id: this.state.id,
          //profileId: this.state.profileId,
          firstName: this.state.school,
          lastName: this.state.degree,
          gender: this.state.schoolStartDate,
          age: this.state.schoolEndDate,
          headLine: this.state.headLine,
          Location: this.state.Location,
          twitter: this.state.twitter,
          facebook: this.state.facebook,
          instagram: this.state.instagram,
          height: this.state.height,
          weight: this.state.weight,
          bodyFat: this.state.bodyFat
      }
      PersonService.updateProfile(this.state.id, this.updateProfileSuccess, this.updateProfileError, data)
      this.setState({
          modal: !this.state.modal
      })
  }

    updateProfileSuccess = resp => {
      console.log(resp)
      ProfileService.getByIdProfile(4, this.profileSuccess, this.profileError)
    }

    updateProfileError = err => {
      console.log(err)
    }



    toggle() {
      this.setState({
        modal: !this.state.modal
      })
    }

    profileError = err => {
      console.log(err)
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
                                    <h4 className="font-weight-bold mb-4">
                                      Dom Nguyen
                                      <button type="button" className="btn btn-link" data-toggle="modal" data-target="#modals-profile">+</button>
                                    </h4>
                                    <div className="text-muted mb-4 small">
                                    Cardio? Ain't nobody got time for that
                                    </div>
                                    <div className="row justify-content-sm-between mb-4" style={{fontSize:"18px"}}>
                                      <a href="javascript:void(0)" class="d-block text-dark mb-2">
                                        <i class="ion ion-logo-twitter ui-w-30 text-center text-twitter"></i> @buffestguyinC64
                                      </a>
                                      <a href="javascript:void(0)" class="d-block text-dark mb-2">
                                        <i class="ion ion-logo-facebook ui-w-30 text-center text-facebook"></i> buffestguyinC64
                                      </a>
                                      <a href="javascript:void(0)" class="d-block text-dark mb-0">
                                        <i class="ion ion-logo-instagram ui-w-30 text-center text-instagram"></i> buffestguyinC64
                                      </a>
                                    </div>
                                      <a href="javascript:void(0)" class="btn btn-primary btn-round">+&nbsp; Follow</a>
                                      &nbsp;
                                      <a href="javascript:void(0)" class="btn btn-primary btn-round">DM me</a>
                                </div>
                            </div>
                            <hr class="m-0" />
                    {/* END HEADER */}

                    {/* BODY */}
                        <div className="row">

                        {/* LEFT SIDE */}
                            <div className="col-md-3">
                                <div className="card mb-4">
                                <div className="card-header">
                                  About Me
                                </div>
                                <div className="card-body row"style={{fontSize:"15px"}}>
                                <div className="text-left col" >
                                    <div className="text">Name:</div>
                                    <div className="text">Age:</div>
                                    <div className="text">Gender:</div>
                                    <div className="text">Location:</div>
                                    <div className="text">Member Since:</div>
                                </div>
                                <div className="col">
                                <div className="text">Dom</div>
                                    <div className="text">33</div>
                                    <div className="text">Male</div>
                                    <div className="text">Orange County</div>
                                    <div className="text">2008</div>
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
                                     <div className="row no-gutters align-items-start pt-1 pl-1">
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
                                    </div>
                                </div>
                                </div>
                            </div> 

                         {/* MODAL */}
                         <div className="modal fade " id="modals-profile">
                                <div className="modal-dialog">
                                  <form className="modal-content">
                                    <div claclassNamess="modal-header">
                                      <h5 className="modal-title pt-3">
                                        Add New 
                                        <span className="font-weight-light">Profile</span>
                                        <br />
                                        <small className="text-muted">Fitness Profile.</small>
                                      </h5>
                                      <button type="button" className="close" data-dismiss="modal"              aria-label="Close">×</button>
                                    </div>
                                    <div className="modal-body"style={{paddingTop: "0px"}}>
                                      <div className="form-row">
                                        <div className="form-group col mb-0">
                                          <label className="form-label">First Name</label>
                                          <input type="text" name="firstName"className="form-control" placeholder="Add First Name Here" />
                                        </div>
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Last Name</label>
                                          <input type="text" name="lastName" className="form-control" placeholder="Add Last Name here" />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Gender</label>
                                          <input type="text" name="gender" className="form-control" placeholder="Add Gender Here" />
                                        </div>
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Age</label>
                                          <input type="text" name="age" className="form-control" placeholder="Add age here" />
                                        </div>
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Location</label>
                                          <input type="text" name="location" className="form-control" placeholder="Add hours here" />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col">
                                          <label className="form-label">Head Line</label>
                                          <input type="text" name="headLine"className="form-control" placeholder="Add Head Line Here" />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Twitter</label>
                                          <input type="text" name="twitter" className="form-control" placeholder="Add Twitter Here" />
                                        </div>
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Facebook</label>
                                          <input type="text" name="facebook" className="form-control" placeholder="Add Facebook here" />
                                        </div>
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Instagram</label>
                                          <input type="text" name="instagram" className="form-control" placeholder="Add Instagram here" />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Height</label>
                                          <input type="text" name="height" className="form-control" placeholder="Add Height Here" />
                                        </div>
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Weight</label>
                                          <input type="text" name="weight" className="form-control" placeholder="Add Weight here" />
                                        </div>
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Body Fat</label>
                                          <input type="text" name="bodyFat" className="form-control" placeholder="Add Body Fat here" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                      <button type="button" className="btn btn-primary">Save</button>
                                    </div>
                                  </form>
                                </div>
                            </div>
                          {/* MODAL */}


                    </div>
                </div>
                </div>
                </div>
            </React.Fragment>



        )
    }

}

export default profile