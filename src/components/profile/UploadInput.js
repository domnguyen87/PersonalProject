import React from 'react';
import FileStorageService from '../../services/FileStorageService'

class UploadInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileUpload: ''
        }
    }
    render() {
        return (
            <div>
                <label><h4>{this.props.fileStorageUploadLabel}</h4></label>
                <div className={this.props.divClassProps} style={{ textAlign: 'center' }}>
                    <div class="input-group">
                        <input type='file' className={this.props.inputClassProps} onChange={this.onFileInput} />
                        <div class="input-group-append">
                            <button type="button" className={this.props.btnClassProps} onClick={this.onUploadClick}>{this.props.uploadBtnText}</button>
                        </div>
                    </div>
                </div>
                {/* <label for="file-upload" class="custom-file-upload">
                    <i class="fa fa-cloud-upload" style={{border: "0px", display: "inline-block", cursor: "pointer"}}>X</i> 
                </label>
                <input id="file-upload" type="file" style={{display: "none"}} onClick={this.onFileInput}/> */}
            </div>
        );
    }

    // START OF FILE UPLOAD
    onFileInput = e => {
        console.log("File was added to input");

        // GRABBING THE FILE FROM THE INPUT
        const file = e.target.files[0];
        console.log("Added File:", file);

        // FORMATTING THE FILE INTO FORMDATA
        let fileData = new FormData();
        fileData.append('file', file);
        console.log(fileData);

        // SETTING THE STATE OF THE FORMDATA
        this.setState({ 
            fileUpload: fileData 
        });

        
    }

    // ON CLICK THIS HANDLER GRABS THE FORMDATA FROM THE STATE AND SEND IT TO THE AXIOS CALL
    onUploadClick = e => {
        console.log("Upload Button Clicked");
        if (this.state.fileUpload) {
            let fileData = this.state.fileUpload;
            console.log("Uploading File", fileData);
            FileStorageService.create(fileData, this.UploadSuccess, this.UploadError);
        } else {
            alert('Please provide a valid file');
        }
    }

    // ON UPLOAD SUCCESS
    UploadSuccess = resp => {
        console.log("Upload Successful", resp);
        alert("Upload was successful");
        window.location.reload();
    }

    // ON UPLOAD ERROR
    UploadError = err => {
        console.log("Upload Error", err);
        alert("Upload failed, please try again");
    }
    // END OF FILE UPLOAD

}

export default UploadInput;