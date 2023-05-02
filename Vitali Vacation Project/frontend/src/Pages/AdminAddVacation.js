// Add Image Input Field
import React from 'react';
import { GetRequest } from '../services/Api';
import { useState , useEffect} from 'react';
import { Route , BrowserRouter, Routes, useNavigate} from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import format from 'date-fns/format'

function AdminAddVacation() {
  const navigate = useNavigate()
  const [Destination, setDestination] = useState("");
  const [Description, setDescription] = useState("");
  const [StartDate, setStartDate] = useState(null);
  const [EndDate, setEndDate] = useState(null);
  const [Price, setPrice] = useState(0);
  const [Image, setImage] = useState("");
  const [vacations, setvacations] = useState([]);
  const [LoggedUser, setLoggedUser] = useState(() => {
    const saved = localStorage.getItem("loggeduser");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const goTo = (des) => {
    navigate('/' + des)
    }
    useEffect(() => {
      if(LoggedUser)
      getAllVacations()
      else{
        alert("You are not logged in")
        goTo("")
      }
  }, []);
  const getAllVacations = async()=>{
    let vacations =  await GetRequest('GetAllVacations')
    setvacations(vacations)
    console.log("vacations : " , vacations)
    console.log("User:", LoggedUser)
}
const CreateVacation = async () =>{
let res = await GetRequest(`InsertVacation?destination=${Destination}&startDate=${StartDate}&endDate=${EndDate}&description=${Description}&price=${Price}&image=${Image}`)
alert("Vacation created")
}
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
    <div>
    <nav className="navbar navbar-expand-lg bg-transparent">
<p className="navbar-brand navbar-admin">Hello Admin</p>
<div>
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <a className="nav-link navbar-text" href="adminpage">Vacations <span class="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link navbar-text" href="adminadd">Add Vacation</a>
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
        <input type="text" id="destination" onChange={(e)=>setDestination(e.target.value)} className="form-control" placeholder='Destination' />
    </div>
    <div className="mb-4">
        <textarea className="form-control text-left" placeholder='Description' rows="3" onChange={(e)=>setDescription(e.target.value)}></textarea>
    </div>
    <div className="mb-4">
        <input type='date' onKeyDown={(e) => e.preventDefault()} className='dates' min={new Date().toISOString().split("T")[0]} onChange={(e) => setStartDate(e.target.value)}></input>
    </div>
    <div className="mb-4">
        <input type='date' onKeyDown={(e) => e.preventDefault()} className='dates' min={StartDate} onChange={(e) => setEndDate(e.target.value)}></input>
    </div>
    <div className="mb-4">
        <input type="number" id="price" onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder='Price' />
    </div>
    <div className="mb-4">
        <input type="text" id="image" onChange={(e)=>setImage(e.target.value)} className="form-control" placeholder='Image' />
    </div>
        <button type="button" onClick={() => Checkdetails()} className="btn btn-primary mr-1 mb-4">Create</button>
    </form>
</div>
  </div>
  )
}

// Img upload plugin , add to React & to Node seperately: Multer

export default AdminAddVacation