import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch} from "react-redux"
import axios from 'axios'
import SingleShow from '../components/SingleShow';

function HooksReduxPage() {
    const [TvMazeUrl, setTvMazeUrl] = useState('https://api.tvmaze.com/shows');
    // const [Shows, setShows] = useState([]);
    const dispatch = useDispatch()
    const shows = useSelector((state)=>{
        console.log(state.shows)
        return state.shows})
    

    useEffect(() => {
        console.log(shows)
        if(shows.length == 0)
        getShows()
    }, [shows]);
    const getShows = async()=>{
        const res = await axios.get(TvMazeUrl)
        dispatch({
            type: "UpdateShowsArray",
            payload:res.data
        })
    }

return (
    <div className='row'>
        {
        shows.map((show,index)=>
            <div key={index} className="col-3 mt-5"><SingleShow name={show.name} summary={show.summary} image={show.image ? show.image.medium : "" }/></div>
        )
        }
    </div>
)
}

export default HooksReduxPage