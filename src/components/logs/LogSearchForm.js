import React from 'react'
import { DebounceInput } from 'react-debounce-input';

const LogSearchForm = props => {
    return (
        <div className="container-fluid">
            <div className="row align-items-center justify-content-start">
                <div className="offset-col-md" style={{ height: "77px"}}>
                    <div className="dataTables_length" id="DataTables_Table_0_length">
                        <label>Show Logs 
                            <select name="logPages" aria-controls="DataTables_Table_0" className="form-control form-control-md" value={props.selectValue} onChange={props.onPageChange}>
                                <option name="dropdown1" value="5">5</option>
                                <option name="dropdown2" value="10">10</option>
                                <option name="dropdown3" value="15">15</option>
                            </select>
                        </label>
                    </div>
                </div>
                {/* Search Bar */}
                <div className="offset-col-md" style={{ height: "77px"}}>
                    <div id="DataTables_Table_0_filter" className="dataTables_filter">
                        <label>Search 
                            <DebounceInput minLength={1} debounceTimeout={300} input type="text" name="searchTerm" className="form-control form-control-md" value={props.searchTerm} placeholder="" aria-controls="DataTables_Table_0" onChange={props.onChange} /> 
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogSearchForm