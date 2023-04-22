import React from 'react';
import { GetRequest } from '../services/Api';
import { useState , useEffect} from 'react';
import { Route , BrowserRouter, Routes, useNavigate} from 'react-router-dom'
import "./Maincss.css"

function Main() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const goTo = (des) => {
        navigate('/' + des)
    }
    const [users, setusers] = useState([])  
    const [vacations, setvacations] = useState([]);
    
    useEffect(() => {
        getAllUsers()
        getAllVacations()
    }, []);
    const getAllUsers = async()=>{
        let users =  await GetRequest('GetAllUsers')
        setusers(users)
        console.log("Users : " , users)
    }
    const getAllVacations = async()=>{
        let vacations =  await GetRequest('GetAllVacations')
        setvacations(vacations)
        console.log("vacations : " , vacations)
    }

return (
<div className='MainDV'>
    <div className='formlines'>
    <form>
    <p> Login </p>
    <div className="mb-4">
        <input type="email" id="form2Example1" className="form-control" placeholder='Email' />
    </div>
    <div className="mb-4">
        <input type="password" id="form2Example2" className="form-control" placeholder='Password' />
    </div>
        <button type="button" onClick={() => goTo("login")} className="btn btn-primary btn-block mb-4">Sign in</button>
    <p> Don't have an account? <button type="button" onClick={() => goTo("register")} className="btn btn-primary">Register</button></p>
    </form>
    </div>
</div>
)
}

export default Main