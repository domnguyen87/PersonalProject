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
            data: [],
            url:''
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

    displayStr = str => {
        const renderStr = str.replace(/<[^>]+>/g, '');
        if (renderStr.length > 150) {
            return renderStr.substring(0, 150).concat("...")
        } else {
            return renderStr
        }
    }

    addWebScrape = () => {
        const data = {
            url: this.state.url
        }
        console.log(data)
        WebScrapeService.create(data, this.createWebScrapeSuccess, this.createWebScrapeError )
    }

    createWebScrapeSuccess = resp => {
        console.log(resp)
        WebScrapeService.selectAll(this.WebScrapeSuccess, this.WebScrapeError)
        this.setState ({
            url: ''
        })
    }

    createWebScrapeError = err => {
        console.log(err)
    }

    handleChange = (evt) => {
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]: val
        })
      }



    render() {
        return (
            <React.Fragment>
                <div class="ui-rect ui-rect-30 ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/9.jpg')"}}></div>
                <div className="container-fluid flex-grow-1 container-p-y" >
                    <h3 className="font-weight-bold py-3 mb-4">
                        Personal Trainers
                        <button type="button" className="btn btn-link" data-toggle="modal" data-target="#modals-trainer">+</button>
                    </h3>

                    <div className="row contacts-col-view">
                    {this.state.data.map((par) => {
                        return <ContactsComponent
                            key = {par.id}
                            id = {par.id}
                            Title = {par.Title}
                            Description ={this.displayStr(par.Description)}
                            Image = {par.Image}
                            phone = {par.phone}
                            email = {par.email}
                            twitter = {par.twitter}
                            facebook = {par.facebook}
                            instagram = {par.instagram}
                        />
                    })}
                    </div>

                    {/* MODAL TEMPLATE */}
                    <div className="modal modal-fill-in fade" id="modals-trainer">
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">×</button>
                            <div className="modal-body">
                              <p className="text-white text-large font-weight-light mb-3">WEBSCRAPE ME</p>
                              <div className="input-group input-group-lg mb-3">
                                <input 
                                    type="text" 
                                    name="url" 
                                    className="form-control bg-white border-0" placeholder="Enter the Url"
                                    value={this.state.url}
                                    onChange={this.handleChange} />
                                <span className="input-group-append">
                                  <button className="btn btn-primary" type="button" onClick={this.addWebScrape} data-dismiss="modal">HERE WE GO</button>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    {/* MODAL TEMPLATE */}
                </div>
            </React.Fragment>

        )
    }

    


}

export default Contacts