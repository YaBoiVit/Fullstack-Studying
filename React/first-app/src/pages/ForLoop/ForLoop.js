import React, { Component } from 'react'

class ForLoop extends Component {
    state = { 
        nums:[2,4,6,8,10]
    }

    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
        <div>
            {
            this.state.nums.map((n,index)=><div key={index}> this is number: {n} </div>)
            }
        </div>

        );
    }
}

export default ForLoop;