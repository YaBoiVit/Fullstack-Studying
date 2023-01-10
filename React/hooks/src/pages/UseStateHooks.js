import React, { useState } from 'react';

//imrs
//rfce


function UseStateHooks() {
const [Saved, setSaved] = useState([])
const [Num, setNum] = useState(22);
const [MyName, setMyName] = useState('abc');
  //let num = 10;

const changeNumber = (n) => {
    setNum(n);
}
const AddArray = (n) => {
    setSaved([...Saved,n]);
}

return (
    <>
        <div>UseStateHooks</div>

        <button type='button' className='btn btn-primary' onClick={()=> 
            {
                changeNumber(Num+1);
                AddArray(Num);
            }
        }>Change Number</button> 
        <button type='button' className='btn btn-primary' onClick={()=>setMyName('newname')}>Change my Name</button>

        <div>
            <div>My Number is : {Num}</div>
            <div> My name is : {MyName}</div>
            <hr/>
            {
                Saved.map((n,i) => <div key={i}>{n}</div>)
            }
        </div>
    </>
)
}

export default UseStateHooks