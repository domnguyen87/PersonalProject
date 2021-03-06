import React from 'react'
import LogService from '../../services/LogService'
import LogSearchForm from './LogSearchForm';
import LogGetAllForm from './LogGetAllForm'
import LogPagination from './LogPagination'

class Logs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumber: 0,
            pageSize: 10,
            pagedItems:[],
            sortBy: '',
            sortOrder: "DESC",
            searchObject: {
                searchTerm: ""
            }
        }
    }

    componentDidMount () {
        this.setState ({
            pageNumber : this.state.pageNumber + 1
        }, () => LogService.selectByPageNumber(this.state.pageNumber, this.state.pageSize, this.onGetSuccess, this.onGetError), )
        console.log(this.state)
    }

    onGetSuccess = resp => {
        console.log(resp.data.Items)
        this.setState({
            pagedItems: resp.data.Items
        })
    }

    handlePageChange = evt => {
        console.log(evt.target.value)
        this.setState({
            pageSize: evt.target.value
        }, () => LogService.selectByPageNumber(this.state.pageNumber, this.state.pageSize, this.onPaginationSuccess, this.onPaginationError))
    }

    onPaginationSuccess = resp => {
        console.log(resp)
        this.setState({
            pagedItems: resp.data.Items
        })
    }

    onPaginationError = err => {
        console.log(err)
    }

    pageNext = evt => {
        if (this.state.pagedItems.length == 0 ) {
            this.setState ({
                disable: true
            })
        } else {
            this.setState({
                pageNumber: this.state.pageNumber + 1
            }, () => LogService.selectByPageNumber(this.state.pageNumber, this.state.pageSize, this.onPaginationSuccess, this.onPaginationError))
        }
    }

    pagePrevious = evt => {
        if (this.state.pageNumber == 1) {
            this.setState ({
                disable:true
            })
        } else {
            this.setState({
                disable:false,
                pageNumber: this.state.pageNumber - 1
            }, () => LogService.selectByPageNumber(this.state.pageNumber, this.state.pageSize, this.onPaginationSuccess, this.onPaginationError))
        }
    }

    onChange = evt => {
        let key = evt.target.name
        let val = evt.target.value
        console.log(evt.target.name, evt.target.val)
        let searchObject = {
            ...this.state.searchObject
        }
        searchObject.searchTerm = this.state.searchObject.searchTerm
        searchObject.UserName = this.state.searchObject.UserName
        searchObject.pageNumber = this.state.pageNumber
        searchObject.pageSize = this.state.pageSize
        searchObject.pageSize = this.state.sortBy
        searchObject.pageSize = this.state.sortOrder
        if (this.state.sortOrder == 'DESC') {
            this.setState({
                searchObject,
                [key]: val,
                pageNumber: 1,
                sortOrder: 'ASC'
            }, () => this.filterLogs(searchObject))
        } else {
            this.setState({
                searchObject,
                [key]: val,
                pageNumber: 1,
                sortOrder: 'DESC'
            }, () => this.filterLogs(searchObject))
        }
    }

    filterLogs = items => {
        console.log(this.state)
        let data = {
            searchTerm: this.state.searchTerm,
            pageNumber: this.state.pageNumber,
            pageSize: this.state.pageSize,
            sortBy: this.state.sortBy,
            sortOrder: this.state.sortOrder
        }
        console.log(this.state.pageNumber)
        this.setState({
            pageNumber: 1
        }, LogService.search(data, this.onGetSuccess, this.onGetError))
    }
    



    render() {
        return (
            <div>
                <div className="container-fluid flex-grow-1 container-p-y">
                    <h4 className="font-weight-bold py-3 mb-4">
                        <span className="text-muted font-weight-light">Logs</span>
                    </h4>
                    <LogSearchForm
                        selectValue={this.state.pageSize}
                        onPageChange={this.handlePageChange}
                        onChange={this.onChange}
                        searchTerm={this.state.searchTerm} />
                    
                    <div className="table-responsive" >
                        <table className="datatables-demo table table-striped table-bordered">
                            <thead >
                                <tr>
                                    {/* <th>Id <button className="fas fa-sort float-right" name="sortBy" value="Id" onclick={this.onChange}></button></th> */}
                                    <th>Email <button className="fas fa-sort float-right" name="sortBy" value="Email" onClick={this.onChange}></button></th>
                                    {/* <th>EmailConfirmed <button className="fas fa-sort float-right" name="sortBy" value="EmailConfirmed" onclick={this.onChange}></button></th> */}
                                    {/* <th>PasswordHash <button className="fas fa-sort float-right" name="sortBy" value="PasswordHash" onclick={this.onChange}></button></th>
                                    <th>SecurityStamp <button className="fas fa-sort float-right" name="sortBy" value="SecurityStamp" onclick={this.onChange}></button></th> */}
                                    <th>PhoneNumber <button className="fas fa-sort float-right" name="sortBy" value="PhoneNumber" onClick={this.onChange}></button></th>
                                    {/* <th>PhoneNumberConfirmed <button className="fas fa-sort float-right" name="sortBy" value="PhoneNumberConfirmed" onclick={this.onChange}></button></th> */}
                                    {/* <th>TwoFactorEnabled <button className="fas fa-sort float-right" name="sortBy" value="TwoFactorEnabled" onclick={this.onChange}></button></th> */}
                                    <th>LockoutEndDateUtc <button className="fas fa-sort float-right" name="sortBy" value="LockoutEndDateUtc" onClick={this.onChange}></button></th>
                                    {/* <th>LockoutEnabled <button className="fas fa-sort float-right" name="sortBy" value="LockoutEnabled" onclick={this.onChange}></button></th> */}
                                    <th>AccessFailedCount <button className="fas fa-sort float-right" name="sortBy" value="AccessFailedCount" onClick={this.onChange}></button></th>
                                    <th>UserName <button className="fas fa-sort float-right" name="sortBy" value="UserName" onClick={this.onChange}></button></th>
                                </tr>
                            </thead>
                            {this.state.pagedItems.map((para) => {
                                return <LogGetAllForm
                                    key={para.id}
                                    //Id={para.Id}
                                    Email={para.Email}
                                    //EmailConfirmed={para.EmailConfirmed}
                                    //PasswordHash={para.PasswordHash}
                                    // SecurityStamp={para.SecurityStamp}
                                    PhoneNumber={para.PhoneNumber}
                                    //PhoneNumberConfirmed={para.PhoneNumberConfirmed}
                                    //TwoFactorEnabled={para.TwoFactorEnabled}
                                    LockoutEndDateUtc={para.LockoutEndDateUtc}
                                    //LockoutEnabled={para.LockoutEnabled}
                                    AccessFailedCount={para.AccessFailedCount}
                                    UserName={para.UserName}
                                    delete={this.delete}
                                />
                            })}
                        </table>
                        <LogPagination
                            pageNext={this.pageNext}
                            pagePrevious={this.pagePrevious}
                            pageNumber={this.state.pageNumber}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Logs