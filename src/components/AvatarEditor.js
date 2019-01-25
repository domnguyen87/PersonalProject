import React from 'react'
import Avatar from 'react-avatar-edit'
//import FileStorageService from '../../services/FileStorageService';
import DropZone from 'react-dropzone'
import SweetAlert from 'react-bootstrap-sweetalert'
import Spinner from 'react-spinkit'


class AvatarEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            preview: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
            imgData: '',
            sweetAlertAddShow: false,
            sweetAlertUpdateShow: false,
            sweetAlertRemoveShow: false,
            sweetAlertConfirmShow: false,
            pathname: this.props.pathname,
            imageUploading: false
        }
    }

    render() {
        return (

            <div className={this.props.mainDivClassProps} style={this.props.mainDivStyleProps}>
                <label>
                    <h3>{this.props.avatarEditorLabel}</h3>
                </label>
                <div className="col-md-6" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                    <Avatar
                        mimeTypes={this.props.mimeTypes}
                        label={this.props.label}
                        width={this.props.avatarEditorWidth}
                        imageWidth={this.props.imageWidth}
                        onCrop={this.onCropAvatar}
                        onClose={this.onCloseAvatar}
                        onFileLoad={this.onFileLoad}
                    />
                    <br />
                    <div className={this.props.imagePreviewDivClassProps}>
                        <img src={this.state.preview} alt="profile image preview" />
                    </div>
                    <br />
                </div>

                <div className={this.props.btnDivClassProps} hidden={this.state.preview === "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" ? true : false}>
                    <button
                        type='button'
                        className={this.props.btnClassProps}
                        onClick={this.onSubmitClick}
                        disabled={this.state.imageLoading ? true : false}
                    >
                        {!this.state.imageLoading ? this.props.btnTextProps : <Spinner name="cube-grid" fadeIn='none' className="mx-auto" />
                        }
                    </button>
                </div>

                {/* SWEETALERTS */}
                <SweetAlert success title="Successfully Added" show={this.state.sweetAlertAddShow} onConfirm={this.sweetAlertHide}>
                </SweetAlert>
                <SweetAlert success title="Successfully Updated" show={this.state.sweetAlertUpdateShow} onConfirm={this.sweetAlertHide}>
                </SweetAlert>
                <SweetAlert success title="Successfully Removed" show={this.state.sweetAlertRemoveShow} onConfirm={this.sweetAlertHide}>
                </SweetAlert>
                <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Delete"
                    confirmBtnBsStyle="danger"
                    cancelBtnBsStyle="default"
                    title="Confirm Delete"
                    show={this.state.sweetAlertConfirmShow}
                    onConfirm={this.onConfirmDeleteProfileImage}
                    onCancel={this.sweetAlertHide}
                >
                </SweetAlert>
                {/* END OF SWEETALERTS */}

            </div>

        );
    }

    sweetAlertHide = () => {
        this.setState({
            sweetAlertAddShow: false,
            sweetAlertUpdateShow: false,
            sweetAlertRemoveShow: false,
            sweetAlertConfirmShow: false,
        });
        // window.location.reload();
    }


    onFileLoad = e => {
        console.log(e);
        this.setState({ imgData: e })
    }

    onCropAvatar = e => {
        this.setState({ preview: e })
    }

    onCloseAvatar = e => {
        this.setState({ preview: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' })
    }

    onSubmitClick = e => {
        console.log("Submit was clicked")
        if (this.state.preview != 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==') {
            this.setState({
                imageLoading: true
            })
            this.props.loadingAnimation();
            const croppedImageB64 = this.state.preview;
            const imageFile = this.state.imgData;
            const imageFileName = imageFile.name;
            const fileObject = this.dataURLtoFile(croppedImageB64, imageFileName);
            console.log(fileObject);
            const uploadData = new FormData();
            uploadData.append('file', fileObject);
            console.log(uploadData);
            FileStorageService.create(uploadData, this.onUploadSuccess, this.onUploadError)
        } else {
            alert('Upload data was not loaded correctly')
        }
    }

    onUploadSuccess = resp => {
        // console.log("Upload Successful:", resp);
        // alert('Upload successful');
        if (this.props.selectCurrentProfileImage) {
            this.props.selectCurrentProfileImage();
            this.props.profileImageToggle();
        } else {
            this.setState({
                sweetAlertAddShow: true
            })
        }


    }

    onUploadError = err => {
        console.log("Upload Failed:", err);
        alert('Upload failed');
    }

    dataURLtoFile = (dataurl, filename) => {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }

}

export default AvatarEditor;
