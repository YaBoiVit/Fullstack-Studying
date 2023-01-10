import React, { useState, useEffect} from 'react';


function UseState() {
    const [Num, setNum] = useState(0);
    const [Nums,setNums] = useState([]);

    const updateNum=(n)=>{
        let z = Math.floor(Math.random()*100);
        setNums([...Nums,z])
    }

    return (
        <div>
            <div>UseState {Num}</div>
            <button type='button' onClick={()=>updateNum(17)}>UpdateNum </button> 

            {
                Nums.map(n=><div>{n}</div>)
            }
        </div>
    )
}

export default UseState