import React, { useState, useEffect} from 'react';
import TasksTable from '../components/TasksTable';
import { GetRequest } from '../services/Api';

function Main() {

    const [users, setusers] = useState([])  
    const [tasks, settasks] = useState([]) 
    const [filtertasks, setfiltertasks] = useState([]) 
    const [selectedUser, setselectedUser] = useState(0)
    const [task, settask] = useState("")

    useEffect(() => {
        getAllUsers();
        getAllTasks();
    }, []);

    const getAllUsers = async()=>{
        let users =  await GetRequest('getAllUsers')
        setusers(users)
        console.log("Users : " , users)
    }

    const getAllTasks = async()=>{
        let tasks =  await GetRequest('GetAllTasks')
        settasks(tasks)
        setfiltertasks(tasks)

        console.log("Tasks : " , tasks)
    }

    const onSubmit = async()=>{
        console.log(selectedUser , task)
        if(selectedUser == 0 || task == ""){
            alert("נא למלא משימה ומשתמש")
            return;
        }
        
        let res = await GetRequest(`InsertTask?task=${task}&userID=${selectedUser}`)
        setselectedUser(0);
        settask("");
        getAllTasks()
        console.log("RESULT : " , res)
    }

    const filterUsers = async(userID)=> {
        console.log("USERID : " , userID)
        if(userID == 0)
        {
            setfiltertasks(tasks)
            return
        }

        let filter = tasks.filter(task=>task.userID == userID)
        setfiltertasks(filter);
    }

    const deleteTask = async (taskID)=>{
        console.log("Tid : ",  taskID)
        let deleteTask =  await GetRequest('DeleteTask?id='+taskID)
    }

return (
    <div className='container'>
        <div className='row p-5 text-right'>
            <div className='col-2'>
                <button type="button" className='btn btn-primary mt-4' onClick={()=>onSubmit()}>הכנס משימה</button>
            </div>
            <div className='col-2'>
                <div className="form-group">
                    <label>בחר משתמש</label>
                    <select className="form-control" id="exampleFormControlSelect" onChange={(e)=>setselectedUser(e.target.value)}>
                        <option value="0"> בחר משתמש</option>
                        { 
                        users.map(user=> 
                            <option key={user.ID} value={user.ID}> {user.userName}</option>
                        ) 
                        }
                    </select>
                </div>
            </div>
            <div className='col-8'>
                <div className="form-group">
                    <label>הכנס משימה</label>
                    <textarea className="form-control text-right" id="exampleFormControlTextarea1" rows="3" value={task} onChange={(e)=>settask(e.target.value)}></textarea>
                </div>
            </div>
        </div>
        <hr/>
        <div className='row'>
            <div className='col-12'>
                    <select className="form-control" id="exampleFormControlSelect" onChange={(e)=>filterUsers(e.target.value)}>
                        <option value="0"> כולם</option>
                        { 
                            users.map(user=> 
                                <option key={user.ID} value={user.ID}> {user.userName}</option>
                            ) 
                        }
                    </select>
            </div>
            <div className='col-12'>
                <TasksTable tasks={filtertasks} users={users} deleteTask={deleteTask}/>
            </div>
        </div>
    </div>
  )
}

export default Main