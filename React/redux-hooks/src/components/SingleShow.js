import React from 'react'
import './SingleShow.css'

function SingleShow(props) {
return (
    <div className='card'>
        <img src={props.image} alt="Card image cap"/>
        <div >{props.name}</div>
        <div dangerouslySetInnerHTML={{__html: props.summary}}></div>
    </div>
)
}

export default SingleShow