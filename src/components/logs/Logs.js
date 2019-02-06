import React from 'react'
import LogService from '../../services/LogService'

class Logs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumber: 0,
            pageSize: 10,
        }
    }

    componentDidMount () {
        this.setState ({
            pageNumber : this.state.pageNumber + 1
        }, () => LogService.selectByPageNumber(this.state.pageNumber, this.state.pageSize, this.onGetSuccess, this.onGetError))
        console.log(this.state)
        //LogService.selectAll(this.onGetSuccess, this.onGetError)
    }

    onGetSuccess = resp => {
        console.log(resp)
    }

    onGetError = err => {
        console.log(err)
    }



    render() {
        return (
            <div>
                <div className="container-fluid flex-grow-1 container-p-y">
                    <h4 className="font-weight-bold py-3 mb-4">
                        <span className="text-muted font-weight-light">Logs</span>
                    </h4>
                </div>
            </div>
        )
    }
}

export default Logs