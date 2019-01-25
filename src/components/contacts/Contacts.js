import React from 'react'
import ContactsComponent from './ContactsComponent'
import WebScrapeService from '../../services/WebScrapeService'

class Contacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: '',
            name: '',
            phone: '',
            twittter: '',
            instagram: '',
            Title: '',
            Description: '',
            Image: '',
            data: []
 

        }
    }

    componentDidMount() {
        WebScrapeService.selectAll(this.WebScrapeSuccess, this.WebScrapeError)
    }

    WebScrapeSuccess = resp => {
        console.log(resp)
        this.setState({ data:resp.data.Items })
    }

    WebScrapeError = err => {
        console.log(err)
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid flex-grow-1 container-p-y">
                    <h3 className="font-weight-bold py-3 mb-4">
                        Personal Trainers
                    </h3>

                    <div className="row contacts-col-view">
                    {this.state.data.map((par) => {
                        return <ContactsComponent
                            key = {par.id}
                            id = {par.id}
                            Title = {par.Title}
                            Description ={par.Description}
                            Image = {par.Image}
                            phone = {par.phone}
                            email = {par.email}
                            twitter = {par.twitter}
                            facebook = {par.facebook}
                            instagram = {par.instagram}
                        />
                    })}
                     {/* <ContactsComponent /> */}
                    </div>
                    </div>
            </React.Fragment>

        )
    }

    


}

export default Contacts