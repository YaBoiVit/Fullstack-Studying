import React from 'react'
import './Formcss.css'

function UserCard(props) {
return (
    <div className='card' style={{backgroundColor : props.users.selected ? "red" : "aquamarine"}} >
        <div>{props.users.email}</div>
        <div>{props.users.pass}</div>
        <button type="button" className="btn btn-primary" onClick={() => props.SwapColorFN(props.index)}>Swap</button>
    </div>
)
}

export default UserCard