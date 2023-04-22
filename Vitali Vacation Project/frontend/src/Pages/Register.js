import React from 'react';
import { GetRequest } from '../services/Api';
import { useState , useEffect} from 'react';
import { Route , BrowserRouter, Routes, useNavigate} from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  const goTo = (des) => {
    navigate('/' + des)
}
useEffect(() => {
  getAllUsers()
}, []);
const getAllUsers = async()=>{
  let users =  await GetRequest('GetAllUsers')
  setusers(users)
  console.log("Users : " , users)
}
const [users, setusers] = useState([]);
const [Firstname, setFirstname] = useState("")
const [Lastname, setLastname] = useState("")
const [Email, setEmail] = useState("")
const [Password, setPassword] = useState("")

  const Checkdetails=()=>{
    if(Firstname == "" || Lastname == "" || Email == "" || Password == "")
    alert("Please enter all the lines below")
    else{
      users.map((user) =>  {
        if(user.Email == Email){
          alert("Email already in use")
        }
        else
        {
          SendUser()
        }
      
});
    }
  }
  const SendUser = async () =>{
    if(Email == "admin@gmail.com"){
    let res = await GetRequest(`InsertUser?firstname=${Firstname}&lastname=${Lastname}&email=${Email}&password=${Password}&isadmin=${1}`)}
    else{
    let res = await GetRequest(`InsertUser?firstname=${Firstname}&lastname=${Lastname}&email=${Email}&password=${Password}&isadmin=${0}`)}
    alert("Account Created Successfully")
    getAllUsers()
  }
  
  return (
    <div>
  <div className='formlines'>
    <form>
    <p> Create Account: </p>
    <div className="mb-4">
        <input type="email" id="firstname" onChange={(e)=>setFirstname(e.target.value)} className="form-control" placeholder='First Name' />
    </div>
    <div className="mb-4">
        <input type="email" id="lastname" onChange={(e)=>setLastname(e.target.value)} className="form-control" placeholder='Last Name' />
    </div>
    <div className="mb-4">
        <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder='Email' />
    </div>
    <div className="mb-4">
        <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder='Password' />
    </div>
        <button type="button" onClick={() => Checkdetails()} className="btn btn-primary btn-block mb-4">Register</button>
    </form>
    </div>
    </div>
  )
}

export default Register