import React from 'react';
import { GetRequest } from '../services/Api';
import { useState , useEffect} from 'react';
import { Route , BrowserRouter, Routes, useNavigate} from 'react-router-dom'
import "./Maincss.css"
import format from 'date-fns/format'
import { BsFillHeartFill } from "react-icons/bs";

function AdminPage() {
  const navigate = useNavigate()
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
  const LikeClicked = (vacation) => {
    console.log(vacation)
  }
  return (
    <div>
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
        <a className="nav-link navbar-text" onClick={()=>goTo("")}>Logout</a>
      </li>
    </ul>
  </div>
</nav>
<div className='row'> 
{ vacations.map(vacation => 
  <div key={vacation.UserID} className='col-4 mt-4'>
  <div className="card">
  <h4> {vacation.Destination} </h4> 
  <img className="card-img" src={vacation.Image} alt="Card image cap"/>
  <div className="card-description">
  <p className="card-text">{vacation.Description}</p>
  </div>
    <div className='bottom-card'>
      <h2 className='card-price'> {vacation.Price}$</h2>
      <div className='row'>
      <div  className='card-dates col-8'> {format(new Date(vacation.StartDate), "d/MM")} To {format(new Date(vacation.EndDate), "d/MM")}</div >
      <div className='likeicon' onClick={()=>LikeClicked(vacation)}> Follow <BsFillHeartFill/> </div>
    </div>
    </div>
</div>
  </div>
)}
</div>
    </div>
  )
}

export default AdminPage