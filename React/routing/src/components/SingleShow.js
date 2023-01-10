import React from 'react'
import { Route , BrowserRouter, Routes, Link, } from 'react-router-dom'
import './SingleShow.css'

function SingleShow(props) {
return (
    <div className='card'>
        <img src={props.image} alt="Card image cap"/>
        <div >{props.name}</div>
        <div dangerouslySetInnerHTML={{__html: props.summary}}></div>
        <Link to={{pathname:'/show/' + props.id}}><button type="button" className='btn btn-primary' > Info  </button></Link>
    </div>
)
}

export default SingleShow