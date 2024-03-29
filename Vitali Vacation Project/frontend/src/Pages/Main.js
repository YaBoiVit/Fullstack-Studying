// Ready
import React from 'react';
import { GetRequest } from '../services/Api';
import { useState , useEffect} from 'react';
import { Route , BrowserRouter, Routes, useNavigate} from 'react-router-dom'
import "./Maincss.css"

function Main() {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [users, setusers] = useState([])  
    const navigate = useNavigate()
    const goTo = (des) => {
        navigate('/' + des)
    }
    useEffect(() => {
        getAllUsers()
        localStorage.setItem("loggeduser", JSON.stringify(null));
    }, []);
    const getAllUsers = async()=>{
        let users =  await GetRequest('GetAllUsers')
        setusers(users)
        console.log("Users : " , users)
    }
    const CheckLogin = () => {
        if(Email == "" || Password == ""){
        alert("Please enter your details fully")
        return; }
        else{
            for(var i=0;i<users.length;i++){ 
                if(users[i].Email == Email && users[i].Password == Password){
                CheckAdmin(users[i])
                return;
                }
            }
        }
        alert("No account found")
    };
    const CheckAdmin = (user) => {
        localStorage.setItem("loggeduser", JSON.stringify(user));
        if (user.IsAdmin == true)
        goTo("adminpage")
        else
        goTo("uservacations")
    }

return (
<div className='MainDV'>
    <div className='formlines '>
    <form>
    <p className='randomtext font-weight-bold'> Login </p>
    <div className="mb-4">
        <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder='Email' />
    </div>
    <div className="mb-4">
    <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder='Password' />
    </div>
        <button type="button" onClick={() => CheckLogin()} className="btn btn-primary btn-block mb-4">Sign in</button>
    <p className='randomtext font-weight-bold'> Don't have an account? <button type="button" onClick={() => goTo("register")} className="btn btn-primary">Register</button></p>
    </form>
    </div>
</div>
)
}

export default Main