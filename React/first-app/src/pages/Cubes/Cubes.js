import React, { Component } from 'react'
import './Cubes.css'
class Cubes extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        red:0,
        green:0,
        blue:0
    }
    SetColor(color){
        console.log(color)
        this.setState({[color]:this.state[color]+1})
    }
    Calculate(num){
        if (num==0)
        this.setState({red:0,green:0,blue:0})
        else 
        this.setState({
            red:this.state.red +num >= 0 ? this.state.red+=num : 0,
            green:this.state.green +num >= 0 ? this.state.green+=num : 0,
            blue:this.state.blue+num >= 0 ? this.state.blue+=num : 0})
    }
    render() { 
        return ( 
    <div>
        <div className='container'>
            <div className='cube red' onClick={()=>this.SetColor('red')} ></div>
            <div className='cube green' onClick={()=>this.SetColor('green')}></div>
            <div className='cube blue' onClick={()=>this.SetColor('blue')}></div>
        </div><hr/>
            <div className='texts'>
                <p>red:{this.state.red}</p>
                <p>green:{this.state.green}</p>
                <p>blue:{this.state.blue}</p>
            </div>
            <div className='buttons'>
            <button type='button' className='btn-primary' onClick={()=>this.Calculate(1)} > +1 </button>
            <button type='button' className='btn-primary' onClick={()=>this.Calculate(-5)} > -5 </button>
            <button type='button' className='btn-primary' onClick={()=>this.Calculate(0)} > Reset </button>
            </div>
    </div>
        );
    }
}

export default Cubes;