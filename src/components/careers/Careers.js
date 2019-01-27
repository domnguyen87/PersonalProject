import React from 'react'
import CareersComponent from './CareersComponent'
import CareerService from '../../services/CareerService'

class Careers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            Title: '',
            Department: '',
            Time: '',
            Description: ''
        }
    }

    componentDidMount() {
        CareerService.getAllCareer(this.onGetSuccess, this.onGetError)
    }

    onGetSuccess = resp => {
        console.log(resp.data.Item)
        this.setState ({ 
            data: resp.data.Item
        })
    }

    onGetError = err => {
        console.log(err)
    }

    handleChange = (evt) => {
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]: val
        })
      }

    submitClicked = evt => {
        evt.preventDefault();
        const data ={
            Id: this.state.Id,
            Title: this.state.Title,
            Department: this.state.Department,
            Time: this.state.Time,
            Description: this.state.Description
        }
        console.log(data)
        CareerService.createCareer(data, this.createCareerSuccess, this.createCareerError)
    }

    createCareerSuccess = resp => {
        CareerService.getAllCareer(this.onGetSuccess, this.onGetError)
    }

    deleteClicked = Id => {
        console.log(Id, "hello")
        CareerService.deleteCareer(Id, this.deleteSuccess, this.deleteError)
    }

    deleteSuccess = resp => {
        console.log(resp)
        CareerService.getAllCareer(this.onGetSuccess, this.onGetError)
    }

    deleteError = err => {
        console.log(err)
    }

    

    render() {
        return(
            <React.Fragment>
                <div class="ui-rect ui-rect-30 ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></div>
                {/* <div className="position-relative pt-5 pb-4">
                    <div className="portfolio-image" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></div>
                    <div className="align-items-end py-5 px-4 px-md-5">
                        <div className="font-secondary py-md-4 py-xl-5 mx-lg-5">
                            <div className="portfolio-caption text-white font-weight-semibold">
                                <div className="text-tiny font-weight-light">IT ALWAYS SEEMS<br/>IMPOSSIBLE UNTIL<br/>IT'S DONE</div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="authentication-wrapper authentication-3">
                <div className="d-none d-lg-flex col-md-6 offset-md-3 align-items-center " >
                <div className="layout-content">
                    <div className="container-fluid flex-grow-1 container-p-y">
                        <div class="container px-0">
                            <h2 className="text-center font-weight-bolder pt-4">
                                Find a Career You'll Love
                                <button type="button" className="btn btn-link" data-toggle="modal" data-target="#modals-default">+</button>
                            </h2>
                            {/* MODAL */}
                            <div className="modal fade " id="modals-default">
                                <div className="modal-dialog">
                                  <form className="modal-content">
                                    <div claclassNamess="modal-header">
                                      <h5 className="modal-title pt-3">
                                        Add New 
                                        <span className="font-weight-light">Career</span>
                                        <br />
                                        <small className="text-muted">Careers at Fitness.</small>
                                      </h5>
                                      <button type="button" className="close" data-dismiss="modal"              aria-label="Close">×</button>
                                    </div>
                                    <div className="modal-body"style={{paddingTop: "0px"}}>
                                      <div className="form-row">
                                        <div className="form-group col">
                                          <label className="form-label">Job Title</label>
                                          <input 
                                            type="text"
                                            name="Title" 
                                            className="form-control" 
                                            placeholder="Add Title Here"
                                            value={this.state.Title}
                                            onChange={this.handleChange} />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Department</label>
                                          <input 
                                            type="text"
                                            name="Department" 
                                            className="form-control" 
                                            placeholder="Add Department Here" 
                                            value={this.state.Department}
                                            onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Hours</label>
                                          <input 
                                            type="text"
                                            name="Time" 
                                            className="form-control" 
                                            placeholder="Add hours here"
                                            value={this.state.Time}
                                            onChange={this.handleChange} />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col">
                                          <label className="form-label">Job Description</label>
                                          <input 
                                            type="textarea"
                                            name="Description" 
                                            className="form-control" 
                                            placeholder="Add Description Here" 
                                            value={this.state.Description}
                                            onChange={this.handleChange} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                      <button type="button" className="btn btn-primary" onClick={this.submitClicked} data-dismiss="modal">Submit</button>
                                    </div>
                                  </form>
                                </div>
                            </div>
                            {/* MODAL */}
                            </div>
                            <div className="text-center text-muted text-big mx-auto mt-3" style={{maxWidth: "500px"}}>
                                Innovate to Inspire
                            </div>

                            <div className="card mt-5">
                                {this.state.data.map((par) => {
                                    return <CareersComponent
                                    key={par.Id}
                                    Id={par.Id}
                                    Title={par.Title}
                                    Department={par.Department}
                                    Time={par.Time}
                                    Description={par.Description}
                                    onDelete={this.deleteClicked}
                                    />
                                })}
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