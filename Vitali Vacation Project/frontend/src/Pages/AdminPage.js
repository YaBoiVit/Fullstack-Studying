import React from 'react';
import { GetRequest } from '../services/Api';
import { useState , useEffect} from 'react';
import { Route , BrowserRouter, Routes, useNavigate} from 'react-router-dom'
import "./Maincss.css"
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
      getAllVacations()
  }, []);
  const getAllVacations = async()=>{
    let vacations =  await GetRequest('GetAllVacations')
    setvacations(vacations)
    console.log("vacations : " , vacations)
    console.log("User:", LoggedUser)
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
<div className='row'>
{ vacations.map(vacation => 
  <div className='col-4'>
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">{vacation.Destination}</h5>
    <p class="card-text">{vacation.Description}</p>
    <h2> {vacation.Price}$</h2>
  </div>
</div>
  </div>
)}
</div>

    </div>
  )
}

export default AdminPage