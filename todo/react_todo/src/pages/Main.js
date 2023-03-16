import React, { useState, useEffect} from 'react';
import { GetRequest } from '../services/Api';

function Main() {

    const [users, setusers] = useState([])  
    useEffect(() => {
        getAllUsers()
    }, []);

     const getAllUsers = async()=>{
        let users =  await GetRequest('getAllUsers')
        setusers(users)
        console.log("Users : " , users)
    }

  return (
    <div className='row p-5 text-right'>
        <div className='col-2'>
            <button type="button" className='btn btn-primary mt-4'>הכנס משימה</button>
        </div>
        <div className='col-2'>
            <div className="form-group">
                <label for="exampleFormControlSelect2">בחר משתמש</label>
                <select className="form-control" id="exampleFormControlSelect2">
               
                    { 
                       users && users.map(user=> {
                            <option>123{user.userName}</option>
                       }) 
                    }
                </select>
            </div>
        </div>
        <div className='col-8'>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">הכנס משימה</label>
                <textarea className="form-control text-right" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
        
    </div>
  )
}

export default Main