import { Route , BrowserRouter, Routes, Link, } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SingleShow from '../components/SingleShow';

function Home() {
    const [shows, setShows] = useState([]);
    const [TvMazeUrl, setTvMazeUrl] = useState('https://api.tvmaze.com/shows');
    useEffect(() => {
        console.log(shows)
        if(shows.length == 0)
        getShows()
    }, [shows]);
    const getShows = async()=>{
        const res = await axios.get(TvMazeUrl)
        setShows(res.data)
    }
return (
    <div>
        <div className='row'>
        {
        shows.map((show,index)=>
            <div key={index} className="col-3 mt-5"><SingleShow id={show.id} name={show.name} summary={show.summary} image={show.image ? show.image.medium : "" }/></div>
        )
        }
        </div>
    </div>
)
}

export default Home