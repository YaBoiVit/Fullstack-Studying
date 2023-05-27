import React from 'react';
import { GetRequest } from '../services/Api';
import { useState , useEffect} from 'react';
import { Route , BrowserRouter, Routes, useNavigate} from 'react-router-dom'
import "./Maincss.css"
import format from 'date-fns/format'
function UserVacations() {
  const navigate = useNavigate()
  const [Followers, setFollowers] = useState([]);
  const [vacations, setvacations] = useState([]);
  const [FollowClick, setFollowClick] = useState(true);
  const [GlobalImageUrl, setGlobalImageUrl] = useState('http://localhost:5000/public/images/');
  const [LoggedUser, setLoggedUser] = useState(() => {
    const saved = localStorage.getItem("loggeduser");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [SelectedFilter, setSelectedFilter] = useState();
  const goTo = (des) => {
    navigate('/' + des)
    }
    useEffect(() => {
      if(LoggedUser){
      getAllVacations()
      GetAllFollowers()}
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
    vacations.sort((a,b)=> a.StartDate > b.StartDate)
    // vacations.sort(function(a,b){
    //   return new Date(b.StartDate) - new Date(a.StartDate);
    // });
    console.log(vacations)
}
  const GetAllFollowers = async() => {
    let Followers = await GetRequest('GetFollowers')
    setFollowers(Followers)
    console.log( "Followers : ",Followers)
  }
const LikeClicked = async (vacation) => {
  console.log("User ID : ",LoggedUser.UserID)
  console.log("Vacation ID : ",vacation.VacationID)
  let res = await GetRequest(`InsertFollower?UserID=${LoggedUser.UserID}&VacationID=${vacation.VacationID}`)
  let data = await GetRequest(`AddFollower?VacationID=${vacation.VacationID}`)
  console.log("User sent")
}
function SetSelect(e) {
  setSelectedFilter(e.target.value);
}
  return (
    <div className='MainDVScroll'>
    <nav className="navbar navbar-expand-lg bg-transparent">
<p className="navbar-brand navbar-admin">Hello {LoggedUser.FirstName}</p>
<div>
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <a className="nav-link navbar-text" href="uservacations">Vacations</a>
    </li>
    <li className="nav-item">
      <a className="nav-link navbar-text" onClick={()=>goTo("")}>Logout</a>
    </li>
  </ul>
  </div>
  <select
        name="category-list"
        id="category-list"
        onChange={(e)=>SetSelect(e)}
      >
        <option value="">All</option>
        <option value="Outdoor">Following</option>
        <option value="Indoor">Today</option>
        <option value="Aquatics">Upcoming</option>
      </select>
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
    <p className='SwitchText'>Follow:</p>
    <label className="switch">
      <input type="checkbox" onChange={()=>LikeClicked(vacation)}/>
      <span className="slider round"></span>
    </label>
  </div>
  </div>
</div>
</div>
)}
</div>
  </div>
  )
}

export default UserVacations