// Image change problem
import React from 'react';
import { GetRequest } from '../services/Api';
import { useState , useEffect} from 'react';
import { Route , BrowserRouter, Routes, useNavigate} from 'react-router-dom'
import "./Maincss.css"
import axios from 'axios';

function AdminEdit() {
  const navigate = useNavigate()
  const [EditedVacation, setEditedVacation] = useState(() => {
    const saved = localStorage.getItem("vacationID");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [Destination, setDestination] = useState(EditedVacation.Destination);
  const [Description, setDescription] = useState(EditedVacation.Description);
  const [StartDate, setStartDate] = useState(null);
  const [EndDate, setEndDate] = useState(null);
  const [Price, setPrice] = useState(EditedVacation.Price);
  const [Image, setImage] = useState("");
  const [GlobalURl, setGlobalURl] = useState('http://localhost:5000/');
  const [GlobalImageUrl, setGlobalImageUrl] = useState('http://localhost:5000/public/images/');
  const [LoggedUser, setLoggedUser] = useState(() => {
    const saved = localStorage.getItem("loggeduser");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  
  const goTo = (des) => {
    navigate('/' + des)
    }
    useEffect(() => {
      if(!LoggedUser || LoggedUser.IsAdmin == 0){
        alert("You are not an administrator")
        goTo("")
      }
      else{
        console.log(LoggedUser)
        console.log(EditedVacation)
      }
  }, []);
    const Checkdetails = () => {
      if(Destination == "" || Description == "" || StartDate == null || EndDate == null || Price == 0){
        alert("Please enter all the lines below") 
        return }
        else{
          if(Price<0 || Price>10000){
            alert("Price is invalid") 
            return }} 
        EditVacation()
    }
    const EditVacation = () =>{ 
      const formData = new FormData()
      formData.append('id',EditedVacation.VacationID)
      formData.append('Destination',Destination)
      formData.append('StartDate',StartDate)
      formData.append('EndDate',EndDate)
      formData.append('Description',Description)
      formData.append('Price',Price)
      formData.append('Image',Image)
      axios.post(GlobalURl + "EditVacation", formData, {
      }).then(res => {
          console.log(res)
      })
    alert("Vacation edited successfully")
    // goTo("adminpage")
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
<div className='Header'>
    Edit Vacation
</div>
<div className='VacCard'>
<form id='create-form'>
    <div>
        <label className='randomtext'> Destination </label>
        <input type="text" id="destination" onChange={(e)=>setDestination(e.target.value)} className="form-control" value={Destination} />
    </div>
    <div className="mb-2">
        <label className='randomtext'> Description </label>
        <textarea className="form-control text-left" value={Description} rows="6" onChange={(e)=>setDescription(e.target.value)}></textarea>
    </div>
    <div className="mb-1">
        <label className='randomtext'> Start Date :  </label>
        <input type='date' onKeyDown={(e) => e.preventDefault()} className='dates' min={new Date().toISOString().split("T")[0]} onChange={(e) => setStartDate(e.target.value)}></input>
    </div>
    <div className="mb-1">
        <label className='randomtext'> End Date : </label>
        <input type='date' onKeyDown={(e) => e.preventDefault()} className='dates' min={StartDate} onChange={(e) => setEndDate(e.target.value)}></input>
    </div>
    <div className="mb-1">
        <label className='randomtext'> Price </label>
        <input type="number" id="price" onChange={(e)=>setPrice(e.target.value)} className="form-control" value={Price}/>
    </div>
    <div className="mb-1">
        <label className='randomtext'> Image </label>
        <img className="card-img" src={GlobalImageUrl + EditedVacation.Image} alt="Card image cap"/>
        <input type="file" id="image" onChange={(e)=>setImage(e.target.files[0])} className="form-control" />
    </div>
        <button type="button" onClick={() => Checkdetails()} className="btn btn-primary mr-1 mb-4">Update</button>
        <button type="button" onClick={() => goTo("adminpage")} className="btn btn-primary mr-1 mb-4">Cancel</button>
    </form>
</div>
    
    
    
    </div>
  )
}

export default AdminEdit
