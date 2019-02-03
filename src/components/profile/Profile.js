import React from 'react'
import ProfileService from '../../services/ProfileService'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AvatarEditor from '../AvatarEditor'
import Spinner from 'react-spinkit'
import PicturesComponent from './PicturesComponent';
import FileStorageService from '../../services/FileStorageService'
import UploadInput from './UploadInput'



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
            data:[],
            id:4,
            profileImageModal: false,
            pictureData: []
        }

        this.toggle = this.toggle.bind(this)
    }

    componentDidMount() {
        ProfileService.getByIdProfile(4, this.profileSuccess, this.profileError)
        FileStorageService.selectall(this.getAllImagesSuccess, this.getAllImageError)

    }

    getAllImagesSuccess = resp => {
      console.log(resp.data)
      this.setState({
        pictureData:resp.data
      })
    }

    

    profileSuccess = resp => {
      console.log(resp.data.Item)
      let data = resp.data.Item
      this.setState({
          firstName: data.FirstName,
          lastName: data.LastName,
          gender: data.Gender,
          age: data.Age,
          headLine: data.HeadLine,
          location: data.Location,
          twitter: data.Twitter,
          facebook: data.Facebook,
          instagram: data.Instagram,
          height: data.Height,
          weight: data.Weight,
          bodyFat: data.BodyFat
      })
    }

    submitClicked = evt => {
      evt.preventDefault();
      const data = {
          id: this.state.id,
          //profileId: this.state.profileId,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          gender: this.state.gender,
          age: this.state.age,
          headLine: this.state.headLine,
          location: this.state.location,
          twitter: this.state.twitter,
          facebook: this.state.facebook,
          instagram: this.state.instagram,
          height: this.state.height,
          weight: this.state.weight,
          bodyFat: this.state.bodyFat
      }
      ProfileService.updateProfile(this.state.id, this.updateProfileSuccess, this.updateProfileError, data)
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

    handleChange = (evt) => {
      const key = evt.target.name
      const val = evt.target.value
      this.setState({
          [key]: val
      })
    }

  editClicked = id => {
    ProfileService.getByIdProfile(4, this.profileSuccess, this.profileError)
  }

  getEducationIdSuccess = resp => {
    console.log(resp)
  }

  getEducationIdError = err => {
    console.log(err, "getbyiderror")
  }

    toggle() {
      this.setState({
        modal: !this.state.modal
      })
    }

    profileError = err => {
      console.log(err)
    }

    
    profileImageToggle = () => {
      this.setState({
          profileImageModal: !this.state.profileImageModal
      });
    }

    onClickDeleteProfileImage = e => {
      // console.log('Delete Clicked');
      this.setState({ sweetAlertConfirmShow: true });
      // ProfileImageService.delete(this.props.profileImageId, this.onDeleteSuccessProfileImage, this.onDeleteErrorProfileImage)
    }

    onDeleteSuccessProfileImage = resp => {
      console.log(resp)
      // window.location.reload();
      this.setState({
          userImage: '/assets/img/avatars/defaultuser.jpg'
      }, () => this.props.selectCurrentProfileImage());

      // ProfileImageService.selectByProfileId(this.props.match.params.profileId, this.onSelectProfileImageSuccess, this.onSelectProfileImageError);
  }

    



    render() {

        return (
            <React.Fragment>
                <div className="layout-container col-md-8 offset-md-2">
                <div class="layout-content ">
                    <div class="container-fluid flex-grow-1 container-p-y">
                    
                    {/* HEADER */}
                        <div className="bg-white container-m--x container-m--y mb-4" style={{backgroundImage: "url('assets/img/bg/black2.jpg')"}}>
                            <div className="media col-md-10 col-lg-8 col-xl-7 py-5 mx-auto">
                            {/* <label >Select An Image: {this.props.userImage === "/assets/img/avatars/defaultuser.jpg" || this.props.userImage === ''
                                    ?
                                    <Button className="btn btn-outline-danger btn-sm" onClick={this.profileImageToggle}
                                    >Add Image</Button>
                                    :
                                    <Button className="btn btn-outline-danger btn-sm" onClick={this.onClickDeleteProfileImage}
                                    >Delete Image</Button>}
                                </label> */}
                                <img src="/assets/img/avatars/rock.png" width="40%" alt="" className="ui-w-55 rounded-circle" />
                                {/* <img src={this.props.userImage} width="100%" className="rounded-circle" /> */}
                                
                                <div className="media-body ml-5 text-left text-white">
                                    <h4 className="font-weight-bold mb-4">
                                      {this.state.firstName} {this.state.lastName}  
                                      <button type="button" onClick={this.editClicked} className="btn btn-link small" data-toggle="modal" data-target="#modals-profile">+</button>
                                    </h4>
                                    <div className="text-white mb-4 small">
                                    {this.state.headLine}
                                    </div>
                                    <div className="justify-content-around mb-4" style={{fontSize:"18px"}}>
                                      <a href="javascript:void(0)" class="d-block text-white mb-2">
                                        <i class="ion ion-logo-twitter ui-w-30 text-center text-twitter"></i> {this.state.twitter}
                                      </a>
                                      <a href="javascript:void(0)" class="d-block text-white mb-2">
                                        <i class="ion ion-logo-facebook ui-w-30 text-center text-facebook"></i> {this.state.facebook}
                                      </a>
                                      <a href="javascript:void(0)" class="d-block text-white mb-0">
                                        <i class="ion ion-logo-instagram ui-w-30 text-center text-instagram"></i>{this.state.instagram}
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
                                    <div className="text">{this.state.firstName} {this.state.lastName}</div>
                                    <div className="text">{this.state.age}</div>
                                    <div className="text">{this.state.gender}</div>
                                    <div className="text">{this.state.location}</div>
                                    <div className="text">2008</div>
                                </div>
                                </div>
                                </div>
                            </div>

                        {/* MIDDLE  */}
                            <div className="col-md-6">
                                <div className="card mb-4">
                                <div className="card-header">
                                    <div className="text-muted">Activity Log</div>
                                </div>
                                <div className="card-body">
                                </div>
                                </div>
                            </div>

                        {/* RIGHT SIDE */}
                            <div className="col-md-3">
                                <div className="card mb-4">
                                <div className="card-header with-elements">
                                  <span className="card-header-title">Photos</span>
                                  <div className="card-header-elements ml-2 ">
                                    <small className="text-muted">54</small>
                                  </div>
                                  <button type="button" onClick={this.profileImageToggle} className="btn btn-link small">+</button>
                                  {/* <div className="card-header-elements ml-md-auto col">
                                    <a href="javascript:void(0)" className="btn btn-default md-btn-flat btn-xs">Show More</a>
                                  </div> */}
                               </div>
                                  <div className="row no-gutters align-items-start pt-1 pl-1">
                                      {this.state.pictureData.map((par) => {
                                        return <PicturesComponent 
                                          key={par.id}
                                          id={par.id}
                                          ImageUrl={par.ImageUrl}
                                        />
                                        })}
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
                                          <input 
                                            type="text" 
                                            name="firstName"
                                            className="form-control" 
                                            placeholder="Add First Name Here"
                                            value={this.state.firstName}
                                            onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Last Name</label>
                                          <input 
                                            type="text" 
                                            name="lastName" 
                                            className="form-control" 
                                            placeholder="Add Last Name here" 
                                            value={this.state.lastName}
                                            onChange={this.handleChange} />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Gender</label>
                                          <input 
                                            type="text" 
                                            name="gender" 
                                            className="form-control" 
                                            placeholder="Add Gender Here"
                                            value={this.state.gender}
                                            onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Age</label>
                                          <input 
                                            type="text" 
                                            name="age" 
                                            className="form-control" 
                                            placeholder="Add age here"
                                            value={this.state.age}
                                            onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Location</label>
                                          <input 
                                            type="text" 
                                            name="location" 
                                            className="form-control" 
                                            placeholder="Add hours here" 
                                            value={this.state.location}
                                            onChange={this.handleChange} />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col">
                                          <label className="form-label">Head Line</label>
                                          <input 
                                            type="text" 
                                            name="headLine"
                                            className="form-control" 
                                            placeholder="Add Head Line Here" 
                                            value={this.state.headLine}
                                            onChange={this.handleChange} />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Twitter</label>
                                          <input 
                                            type="text" 
                                            name="twitter" 
                                            className="form-control" 
                                            placeholder="Add Twitter Here" 
                                            value={this.state.twitter}
                                            onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Facebook</label>
                                          <input 
                                            type="text" 
                                            name="facebook" 
                                            className="form-control" 
                                            placeholder="Add Facebook here" 
                                            value={this.state.facebook}
                                            onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Instagram</label>
                                          <input 
                                            type="text" 
                                            name="instagram" 
                                            className="form-control" 
                                            placeholder="Add Instagram here" 
                                            value={this.state.instagram}
                                            onChange={this.handleChange} />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Height</label>
                                          <input 
                                            type="text" 
                                            name="height" 
                                            className="form-control" 
                                            placeholder="Add Height Here" 
                                            value={this.state.height}
                                            onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Weight</label>
                                          <input 
                                            type="text" 
                                            name="weight"
                                            className="form-control" 
                                            placeholder="Add Weight here" 
                                            value={this.state.weight}
                                            onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group col mb-0">
                                          <label className="form-label">Body Fat</label>
                                          <input 
                                            type="text" 
                                            name="bodyFat" 
                                            className="form-control" 
                                            placeholder="Add Body Fat here"
                                            value={this.state.bodyFat}
                                            onChange={this.handleChange} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                      <button type="button" className="btn btn-primary" onClick={this.submitClicked} data-dismiss="modal">Save</button>
                                    </div>
                                  </form>
                                </div>
                            </div>
                        {/* MODAL */}

                        {/*  IMAGE MODAL */}
                        <Modal isOpen={this.state.profileImageModal} toggle={this.profileImageToggle}  className="">
                                    <div style={{
                                        position: 'fixed',
                                        top: '0',
                                        // left: '0px',
                                        width: '100%',
                                        height: '100%',
                                        background: 'black',
                                        opacity: '.7',
                                        zIndex: 99
                                    }}
                                        hidden={!this.state.loading ? true : false}
                                    >
                                    </div>
                                    <div style={{
                                        textAlign: 'center',
                                        position: 'fixed',
                                        marginTop: '50%',
                                        marginBottom: 'auto',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        display: 'flex',
                                        alignSelf: 'center',
                                        transform: 'scale(5)',
                                        zIndex: 100,
                                    }}
                                        hidden={!this.state.loading ? true : false}
                                    >
                                        {/* <Spinner name="folding-cube" fadeIn='none' color="#26B4FF" /> */}
                                    </div>
                                    <ModalHeader toggle={this.profileImageToggle}>Photos of Me</ModalHeader>
                                    <ModalBody>

                                        {/* <FileStorageUploadComponent /> */}
                                        {/* GOOGLE IMAGE */}

                                        {/* <div style={{ textAlign: 'center' }} hidden={this.state.googleImage ? false : true}><img src={this.state.googleImage} className="rounded-circle ui-w-50"></img>
                                            <button
                                                className="btn btn-outline-danger btn-sm"
                                                onClick={this.useGoogleImage}
                                                disabled={this.state.googleImageLoading ? true : false}
                                            >{!this.state.googleImageLoading ? 'Use Google Image' : <Spinner name="cube-grid" fadeIn='none' className="mx-auto" />
                                                }
                                            </button>
                                        </div> */}
                                        {/* <Spinner name="cube-grid" className="mx-auto" /> */}

                                        {/* Avatar Edit */}
                                        {/* <div className="" style={{ textAlign: 'center' }}>
                                            <AvatarEditor
                                                mainDropDivClassProps="card-body "
                                                avatarEditorLabel=""
                                                // mainDivStyleProps={{ textAlign: 'center' }}
                                                mimeTypes="image/jpg, image/jpeg, image/png, image/gif"
                                                label="Click to Add a file"
                                                avatarEditorWidth='100%'
                                                imageWidth='275'
                                                btnClassProps='btn btn-outline-danger'
                                                btnTextProps='Submit'
                                                selectCurrentProfileImage={this.props.selectCurrentProfileImage}
                                                profileImageToggle={this.profileImageToggle}
                                                loadingAnimation={this.loadingAnimation}
                                            />
                                        </div> */}

                                      <div className="col-md-6 mx-auto" style={{ textAlign: 'center' }}>
                                          <UploadInput
                                              fileStorageUploadLabel="Add new Photo"
                                              divClassProps="mt-0"
                                              inputClassProps=""
                                              btnClassProps="btn btn-success"
                                              uploadBtnText="Submit"
                                          />
                                      </div>

                                    </ModalBody>
                                </Modal>
                                {/* END OF PROFILE IMAGE MODAL */}
                                        

                    </div>
                </div>
                </div>
                
            </React.Fragment>



        )
    }

}

export default profile