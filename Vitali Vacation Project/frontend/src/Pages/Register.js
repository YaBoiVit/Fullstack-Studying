import React from 'react';
import { useState , useEffect} from 'react';
import { Route , BrowserRouter, Routes, useNavigate} from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  const goTo = (des) => {
    navigate('/' + des)
}
const [Firstname, setFirstname] = useState("")
const [Lastname, setLastname] = useState("")
const [Username, setUsername] = useState("")
const [Email, setEmail] = useState("")
const [Password, setPassword] = useState("")
  const Checkdetails=()=>{
      
  }
  return (
    <div>
  <div className='formlines'>
    <form>
    <p> Create Account: </p>
    <div className="mb-4">
        <input type="email" id="form2Example1" className="form-control" placeholder='First Name' />
    </div>
    <div className="mb-4">
        <input type="email" id="form2Example1" className="form-control" placeholder='Last Name' />
    </div>
    <div className="mb-4">
        <input type="email" id="form2Example1" className="form-control" placeholder='Email' />
    </div>
    <div className="mb-4">
        <input type="email" id="form2Example1" className="form-control" placeholder='Username' />
    </div>
    <div className="mb-4">
        <input type="password" id="form2Example2" className="form-control" placeholder='Password' />
    </div>
        <button type="button" onClick={() => Checkdetails()} className="btn btn-primary btn-block mb-4">Register</button>
    </form>
    </div>
    </div>
  )
}

export default Register