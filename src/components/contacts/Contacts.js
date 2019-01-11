import React from 'react'
import ContactsComponent from './ContactsComponent'

class Contacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: '',
            name: '',
            phone: '',
            twittter: '',
            instagram: '',
            data: []
 

        }
    }

    componentDidMount() {
        Accounts.getAllAccounts(this.getAllAccountsSuccess, this.getAllAccountsError)
    }

    getAllAccountsSuccess = resp => {
        console.log(resp)
        this.setState({ data:resp.data.item })
    }

    render() {
        return (
            <React.Fragment>
                <div className="layout-content">
                    <h3 className="font-weight-bold py-3 mb-4">
                        Personal Trainers
                    </h3>

                    <div class="row contacts-col-view">
                    {this.state.data.map((par) => {
                        return <ContactsComponent
                            key = {par.id}
                            id = {par.id}
                            picture = {par.picture}
                            name = {par.name}
                            phone = {par.phone}
                            email = {par.email}
                            twitter = {par.twitter}
                            facebook = {par.facebook}
                            instagram = {par.instagram}
                        />
                    })}
                    </div>
                </div>
            </React.Fragment>

        )
    }

    


}

export default Contacts