import React, { useState, useEffect } from 'react';
import UseEffect from './UseEffect';
import axios from 'axios';

function AddCarToNode(){
    const [GlobalURL, setGlobalURL] = useState('http://localhost:5000');
    const [Model, setModel] = useState('');
    const [Color, setColor] = useState('');
    const [Year, setYear] = useState(0);
    const [Price, setPrice] = useState(0);
    
    const AddCar = async() => {
        const res = await axios.get(GlobalURL + '/addCar?model='+Model+'&color='+Color+'&year='+Year+'&price='+Price);
        console.log(res.data)
    }

    return (
<div>
    <form className='mr-2'>
        <div className="form-group">
            <label>Model</label>
            <input type="text" onChange={(e)=>setModel(e.target.value)} className="form-control" id="nameinput" aria-describedby="emailHelp" placeholder="Enter Model"/>
        </div>
        <div className="form-group">
            <label>Color</label>
            <input type="text" onChange={(e)=>setColor(e.target.value)} className="form-control" id="mailinput" aria-describedby="emailHelp" placeholder="Enter Color"/>
        </div>
        <div className="form-group">
            <label>Year</label>
            <input type="text" onChange={(e)=>setYear(e.target.value)} className="form-control" id="phoneinput" aria-describedby="emailHelp" placeholder="Enter Year"/>
        </div>
        <div className="form-group">
            <label>Price</label>
            <input type="text" onChange={(e)=>setPrice(e.target.value)} className="form-control" id="phoneinput" aria-describedby="emailHelp" placeholder="Enter Price"/>
        </div>
            <button type="button" className="btn btn-primary" onClick={()=>AddCar()}>Submit</button>
    </form>
</div>
    )
}

export default AddCarToNode;