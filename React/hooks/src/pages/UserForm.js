import React, { useState, useSyncExternalStore } from 'react';
import axios from 'axios';

function UserForm() {
    const [User, setUser] = useState({name:'',mail:'',phone:''});
    const [Users, setUsers] = useState([]);
    console.log(Users)

return (
<div>
    <form className='mr-2'>
        <div className="form-group">
            <label>Name</label>
            <input type="email" onChange={(e)=>setUser({...User, name: e.target.value})} className="form-control" id="nameinput" aria-describedby="emailHelp" placeholder="Enter name"/>
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" onChange={(e)=>setUser({...User, mail: e.target.value})} className="form-control" id="mailinput" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
            <label>Phone</label>
            <input type="email" onChange={(e)=>setUser({...User, phone: e.target.value})} className="form-control" id="phoneinput" aria-describedby="emailHelp" placeholder="Enter phone"/>
        </div>
            <button type="button" className="btn btn-primary" onClick={()=>setUsers([...Users,User])}>Submit</button>
        </form>
        <table className="table table-light">
                    <thead>
                    <tr>
                        <th scope="row"> Name </th>
                        <th scope="row"> Mail </th>
                        <th scope="row"> Phone </th>
                        <th scope="row"> Delete </th>
                    </tr>
                    </thead>
                    <tbody>
                        { Users.map((user,i)=> <tr key={i}>
                            <th scope="row"> {user.name} </th>
                            <td> {user.mail} </td>
                            <td> {user.phone} </td>
                            <td><button type='button' className='btn btn-primary' onClick={()=>{
                                const temp = [...Users] ;
                                temp.splice(i,1);
                                setUsers(temp)
                            }}> Delete </button></td>
                        </tr>)}
                    </tbody>
                </table>
</div>
)
}

export default UserForm