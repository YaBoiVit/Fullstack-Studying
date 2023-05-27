import React from 'react';
import { GetRequest } from '../services/Api';
import { useState , useEffect} from 'react';
import { Route , BrowserRouter, Routes, useNavigate} from 'react-router-dom'
import "./Maincss.css"
import format from 'date-fns/format'
import Swal from 'sweetalert2';

function AdminPage() {
  const navigate = useNavigate()
  const [vacations, setvacations] = useState([]);
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
      if(LoggedUser && LoggedUser.IsAdmin == 1)
      getAllVacations()
      else{
        alert("You are not an administrator")
        goTo("")
      }
  }, []);
  const getAllVacations = async()=>{
    let vacations =  await GetRequest('GetAllVacations')
    setvacations(vacations)
    console.log("vacations : " , vacations)
    console.log("User:", LoggedUser)
}
const Deletebtn = async(vacation) =>{
  Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async(result) => {
      if(result.isConfirmed){
          let delvacation = await GetRequest(`deleteVacation?id=${vacation.VacationID}`);
          console.log("DEL : " , delvacation,result)
          if (delvacation.affectedRows == 1 ) {
            getAllVacations(); 
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }else {
              Swal.fire(
                  'Not Deleted!',
                  'Your file has been not deleted. please try again !!',
                  'error'
                )
          }
      }
    })

  }

  const Editbtn = (vacation) => {
    console.log( "Edited: ",vacation)
    localStorage.setItem("vacationID", JSON.stringify(vacation));
    goTo("adminedit")
  }
  return (
    <div className='MainDVScroll'>
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
<div className='row'> 
{ vacations.map((vacation,i) => 
  <div key={i} className='col-4 mt-4'>
  <div className="card">
  <h4> {vacation.Destination} </h4> 
  <img className="card-img" src={GlobalImageUrl + vacation.Image} alt="Card image cap"/>
  <div className="card-description">
  <p className="card-text">{vacation.Description}</p>
  </div>
    <div className='bottom-card'>
      <h2 className='card-price'> {vacation.Price}$</h2>
      <div className='row'>
      <div  className='card-dates col-8'> {format(new Date(vacation.StartDate), "d/MM")} To {format(new Date(vacation.EndDate), "d/MM")}</div >
      <button className='deleteBtn btn-primary' onClick={() => Deletebtn(vacation)} type='button'> Delete </button> 
      <button className='editBtn btn-primary ml-3' onClick={() => Editbtn(vacation)} type='button'> Edit </button> 
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