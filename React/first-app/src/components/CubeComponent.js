import React from 'react'

function CubeComponent(props) {
    var colors = ['red', 'green', 'blue', 'black' , 'white']
return (
    <div>
        <div className="card" onClick={()=>props.cubeclickedFn(colors[props.index])}>
            <div className="card-body" style={{backgroundColor : colors[props.index]}}>
                <h5 className="card-title">{colors[props.index]}</h5>
            </div>
        </div>
    </div>
)
}

export default CubeComponent
