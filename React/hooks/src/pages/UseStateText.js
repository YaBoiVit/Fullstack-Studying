import React, { useState } from 'react';


function UseStateText() {
    const [MyName, setMyName] = useState('');
    const [User, setUser] = useState({name:"",mail:""});
    
    
return (
    <div>
        <input type="text" onChange={(e)=>setMyName(e.target.value)}/>
        <div>
            Name: {MyName}
        </div><hr/>
        <div>
            <input type="text" onChange={(e)=>setUser({...User, name: e.target.value})}/>
        </div>
        <div>
            User Name: {User.name}
        </div>
    </div>
)
}

export default UseStateText