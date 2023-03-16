import React, { useState, useEffect } from 'react';
import axios from 'axios';


function UseEffect() {
const [Users, setUsers] = useState([])
const [Num, setNum] = useState(22);
const [MyName, setMyName] = useState('abc');

    useEffect(() => {
        console.log("effect")
        if(Users.length == 0)
        getUsers()
        console.log(Users)
    }, [Users]);
const getUsers = async()=>{
    const res = await axios.get('http://localhost:5000/users')
    setUsers(res.data.users)
}


// const getUsers = async()=>{
//     const res = await axios.get('https://jsonplaceholder.typicode.com/users')
//     setUsers(res.data)
// }

return (
    <div>
        <button type='button' className='btn btn-primary' onClick={()=>setNum(Num+1) }>Change Number</button>
        <button type='button' className='btn btn-primary' onClick={()=>setMyName('newname')}>Change my Name</button>
        <div>
            {Num}<hr/>
            {MyName}<hr/>
            {Users.map((user,i)=>
            <div key={i}>
                {user.name}
            </div>)}
        </div>
    </div>
)
}

export default UseEffect