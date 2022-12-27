import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Cubes.css'

class Home extends Component {
    
    render() { 
        return ( 
        <div>
            <div className='text'>{this.props.color}</div>
            <div className='row container'>
                <div className='col-1 cube red' onClick={()=>this.props.ChangeColorInReducer('Red')}></div>
                <div className='col-1 cube green'onClick={()=>this.props.ChangeColorInReducer('Green')}></div>
                <div className='col-1 cube blue'onClick={()=>this.props.ChangeColorInReducer('Blue')}></div>
            </div>
        </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        color: state.color,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        ChangeColorInReducer(colorValue){
            dispatch({
                type: "ChangeColor",
                payload: colorValue
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
