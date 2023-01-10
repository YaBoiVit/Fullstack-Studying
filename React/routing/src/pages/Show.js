import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './SingleCss.css'
function Show() {
    const [SingleShow, setShow] = useState([]);
    const param  = useParams()
    const [TvMazeUrl, setTvMazeUrl] = useState('https://api.tvmaze.com/shows/'+ param.id);
    const getShow = async()=>{
        const res = await axios.get(TvMazeUrl)
        setShow(res.data)
        console.log(res.data)
    }
    useEffect(() => {
        getShow()
    }, []);
return (    
    <div className='card-single'>
        <img src={SingleShow.image && SingleShow.image.medium} alt="Card image cap"/>
        <div >{SingleShow.name}</div>
        <div dangerouslySetInnerHTML={{__html: SingleShow.summary}}></div>
</div>
)
}

export default Show