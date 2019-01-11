import react from 'react'

class contacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: '',
            name: '',
            phone: '',
            twittter: '',
            instagram: '',
            data: ''
 

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

                
            </React.Fragment>

        )
    }

    


}

export default contacts