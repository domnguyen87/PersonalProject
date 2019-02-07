import React from 'react'

const LogGetAllForm = props => {
    return (
        <tbody>
            <tr className="odd gradeX" key={props.id}>
                {/* <td className="center"><span>{props.id}</span></td> */}
                <td className="center"><span>{props.Email}</span></td>
                {/* <td className="center"><span>{props.EmailConfirmed}</span></td> */}
                {/* <td className="center"><span>{props.PasswordHash}</span></td> */}
                {/* <td className="center"><span>{props.SecurityStamp}</span></td> */}
                <td className="center"><span>{props.PhoneNumber}</span></td>
                {/* <td className="center"><span>{props.PhoneNumberConfirmed}</span></td> */}
                {/* <td className="center"><span>{props.TwoFactorEnabled}</span></td> */}
                <td className="center"><span>{props.LockoutEndDateUtc}</span></td>
                {/* <td className="center"><span>{props.LockoutEnabled}</span></td> */}
                <td className="center"><span>{props.AccessFailedCount}</span></td>
                <td className="center"><span>{props.UserName}</span></td>
                <td>
                    <button className="fas fa-trash-alt" onClick={() => props.delete(props.id)}></button>
                </td>
            </tr>
        </tbody>
    )
}

export default LogGetAllForm