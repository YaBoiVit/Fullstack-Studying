import React from 'react'

function FunctionComponent(props) {
return (
    <div>
        <div className="card">
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body" onClick={()=>props.cardclickedFn(props.index)}>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <a href="#" className="btn btn-primary" onClick={()=>props.cardclickedFn(props.index)}>Button of {props.title}</a>
            </div>
        </div>
    </div>
)
}

export default FunctionComponent