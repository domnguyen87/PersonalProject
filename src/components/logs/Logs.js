import React from 'react'
import LogService from '../../services/LogService'
import LogSearchForm from './LogSearchForm';
import LogGetAllForm from './LogGetAllForm'

class Logs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumber: 0,
            pageSize: 10,
            pagedItems:[]
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
                                    <th>Id <button className="fas fa-sort float-right" name="sortBy" value="Id" onclick={this.onChange}></button></th>
                                    <th>Email <button className="fas fa-sort float-right" name="sortBy" value="Email" onclick={this.onChange}></button></th>
                                    <th>EmailConfirmed <button className="fas fa-sort float-right" name="sortBy" value="EmailConfirmed" onclick={this.onChange}></button></th>
                                    <th>PasswordHash <button className="fas fa-sort float-right" name="sortBy" value="PasswordHash" onclick={this.onChange}></button></th>
                                    <th>SecurityStamp <button className="fas fa-sort float-right" name="sortBy" value="SecurityStamp" onclick={this.onChange}></button></th>
                                    <th>PhoneNumber <button className="fas fa-sort float-right" name="sortBy" value="PhoneNumber" onclick={this.onChange}></button></th>
                                    <th>PhoneNumberConfirmed <button className="fas fa-sort float-right" name="sortBy" value="PhoneNumberConfirmed" onclick={this.onChange}></button></th>
                                    <th>TwoFactorEnabled <button className="fas fa-sort float-right" name="sortBy" value="TwoFactorEnabled" onclick={this.onChange}></button></th>
                                    <th>LockoutEndDateUtc <button className="fas fa-sort float-right" name="sortBy" value="LockoutEndDateUtc" onclick={this.onChange}></button></th>
                                    <th>LockoutEnabled <button className="fas fa-sort float-right" name="sortBy" value="LockoutEnabled" onclick={this.onChange}></button></th>
                                    <th>AccessFailedCount <button className="fas fa-sort float-right" name="sortBy" value="AccessFailedCount" onclick={this.onChange}></button></th>
                                    <th>UserName <button className="fas fa-sort float-right" name="sortBy" value="UserName" onclick={this.onChange}></button></th>
                                </tr>
                            </thead>
                            {this.state.pagedItems.map((para) => {
                                return <LogGetAllForm
                                    key={para.id}
                                    id={para.id}
                                    email={para.email}
                                    emailConfirmed={para.emailConfirmed}
                                    passwordHash={para.passwordHash}
                                    securityStamp={para.securityStamp}
                                    phoneNumber={para.phoneNumber}
                                    phoneNumberConfirmed={para.phoneNumberConfirmed}
                                    twoFactorEnabled={para.twoFactorEnabled}
                                    lockoutEndDateUtc={para.lockoutEndDateUtc}
                                    lockoutEnabled={para.lockoutEnabled}
                                    accessFailedCount={para.accessFailedCount}
                                    userName={para.userName}
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