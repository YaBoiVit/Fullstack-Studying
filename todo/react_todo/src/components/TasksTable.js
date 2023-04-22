import React, { useState, useEffect} from 'react';

function TasksTable(props) {
    console.log("PROPS : " , props)
    //tasksComponent
    const findUserNameByID = (userID)=>{
        let user = props.users.find(user=>
            user.ID == userID
        )

       let u = user ? user.userName : "";
       return u
    }

   

  return (
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Task</th>
                    <th scope="col">UserId</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.tasks.map(task=> 
                        <tr>
                            <th scope="row">{task.ID}</th>
                            <td>{task.task}</td>
                            <td>{findUserNameByID(task.userID)}</td>
                            <td><button className='btn btn-primary' onClick={()=>props.deleteTask(task.ID)}>DELETE</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default TasksTable