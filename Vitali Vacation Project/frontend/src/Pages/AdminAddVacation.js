// Ready
import React from 'react';
import { GetRequest } from '../services/Api';
import { useState , useEffect} from 'react';
import { Route , BrowserRouter, Routes, useNavigate} from 'react-router-dom'
import "./Maincss.css"
import format from 'date-fns/format'
import axios from 'axios'

function AdminAddVacation() {
  const navigate = useNavigate()
  const [Destination, setDestination] = useState("");
  const [Description, setDescription] = useState("");
  const [StartDate, setStartDate] = useState(null);
  const [EndDate, setEndDate] = useState(null);
  const [Price, setPrice] = useState(0);
  const [Image, setImage] = useState("");
  const [vacations, setvacations] = useState([]);
  const [GlobalURl, setGlobalURl] = useState('http://localhost:5000/');
  
  const [LoggedUser, setLoggedUser] = useState(() => {
    const saved = localStorage.getItem("loggeduser");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const goTo = (des) => {
    navigate('/' + des)
    }
    useEffect(() => {
      if(LoggedUser && LoggedUser.IsAdmin == 1)
      getAllVacations()
      else{
        alert("You are not an administrator")
        goTo("")
      }
  }, []);
  const getAllVacations = async ()=>{
    let vacations =  await GetRequest('GetAllVacations')
    setvacations(vacations)
    console.log("vacations : " , vacations)
    console.log("User:", LoggedUser)
}
const CreateVacation = () =>{ 
  const formData = new FormData()
  formData.append('Destination',Destination)
  formData.append('StartDate',StartDate)
  formData.append('EndDate',EndDate)
  formData.append('Description',Description)
  formData.append('Price',Price)
  formData.append('Image',Image)
  axios.post(GlobalURl + "InsertVacation", formData, {
  }).then(res => {
      console.log(res)
  })
alert("Vacation created")
}
// let res = await GetRequest(`InsertVacation?destination=${Destination}&startDate=${StartDate}&endDate=${EndDate}&description=${Description}&price=${Price}&image=${Image}`)
const Checkdetails=()=>{
  if(Destination == "" || Description == "" || StartDate == null || EndDate == null || Price == 0 || Image == ""){
    alert("Please enter all the lines below") 
    return }
    else{
      if(Price<0 || Price>10000){
        alert("Price is invalid") 
        return }} 
    CreateVacation()
    document.getElementById("create-form").reset();
}
  return (
    <div className='MainDV'>
    <nav className="navbar navbar-expand-lg bg-transparent">
<p className="navbar-brand navbar-admin">Hello Admin</p>
<div>
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <a className="nav-link navbar-text" href="adminpage">Vacations <span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link navbar-text" href="adminadd">Add Vacation</a>
    </li>
    <li className="nav-item">
        <a className="nav-link navbar-text" href="admingraph">Graph</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-text" onClick={()=>goTo("")}>Logout</a>
      </li>
  </ul>
</div>
</nav>
<div className='VacCard'>
<form id='create-form'>
    <p className='randomtext font-weight-bold'> New Vacation: </p>
    <div className="mb-4">
        <label className='randomtext'> Destination </label>
        <input type="text" id="destination" onChange={(e)=>setDestination(e.target.value)} className="form-control" placeholder='Where are we going?' />
    </div>
    <div className="mb-4">
        <label className='randomtext'> Description </label>
        <textarea className="form-control text-left" placeholder='Tell me about it!' rows="3" onChange={(e)=>setDescription(e.target.value)}></textarea>
    </div>
    <div className="mb-4">
        <label className='randomtext'> Start Date: </label> 
        <input type='date' onKeyDown={(e) => e.preventDefault()} className='dates' min={new Date().toISOString().split("T")[0]} onChange={(e) => setStartDate(e.target.value)}></input>
    </div>
    <div className="mb-4">
        <label className='randomtext'> End Date: </label> 
        <input type='date' onKeyDown={(e) => e.preventDefault()} className='dates' min={StartDate} onChange={(e) => setEndDate(e.target.value)}></input>
    </div>
    <div className="mb-4">
        <label className='randomtext'> Price </label>
        <input type="number" id="price" onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder='$$$' />
    </div>
    <div className="mb-4">
        <label className='randomtext'> Image </label>
        <input type="file" id="image" onChange={(e)=>setImage(e.target.files[0])} className="form-control" placeholder='Image' />
    </div>
        <button type="button" onClick={() => Checkdetails()} className="btn btn-primary mr-1 mb-4">Create</button>
    </form>
</div>
  </div>
  )
}

export default AdminAddVacation