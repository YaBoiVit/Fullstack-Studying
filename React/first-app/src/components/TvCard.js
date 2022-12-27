import React from 'react'

function TvCard(props) {
return (
    <div >
        <img src={props.image} alt="Card image cap"/>
        <div >{props.name}</div>
        <div dangerouslySetInnerHTML={{__html: props.summary}}></div>
        <button type="button" className="btn btn-primary" onClick={() => props.callbackFN(props.name)}>Go Back</button>
    </div>
)
}

export default TvCard