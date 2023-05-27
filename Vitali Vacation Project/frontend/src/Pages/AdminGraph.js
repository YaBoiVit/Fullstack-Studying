import React , {PureComponent} from 'react';
import { GetRequest } from '../services/Api';
import { useState , useEffect} from 'react';
import { Route , BrowserRouter, Routes, useNavigate} from 'react-router-dom'
import "./Maincss.css"
import format from 'date-fns/format'
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function AdminGraph() {
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
return (
<div className='MainDV' >
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
<div className='GraphDV'>
        <BarChart
        width={1000}
        height={600}
        data={vacations}
        margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 0,
        }}
        barSize={30}
        >
        <XAxis dataKey="Destination" scale="point" stroke="#fffff"  padding={{ left: 100, right: 10 }} />
        <YAxis dataKey="Followers" stroke="white" />
        <Tooltip stroke="black" />
        <Legend stroke='black'/>
        <CartesianGrid strokeDasharray="2 3" stroke='white' />
        <Bar className='BarText' dataKey="Followers" fill="#FF5757" background={{ fill: '#A2D7FF' }} />
        </BarChart>
</div>
    </div>
)
}

export default AdminGraph