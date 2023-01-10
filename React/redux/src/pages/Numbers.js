import React, { Component } from 'react'
import { connect } from 'react-redux';

class Numbers extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
        <div className='mt-5 NumbersButtons'>
            <button type='button' className='btn btn-danger' onClick={()=>this.props.SaveNumber(1)}> + </button>
            <span className='p-3'> {this.props.num} </span>
            <button type='button' className='btn btn-primary'  onClick={()=>this.props.SaveNumber(-1)}> - </button>
            <button type='button' className='m-3 btn btn-success'  onClick={()=>this.props.SaveNumber(0)}> Clear </button>
        </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        num: state.number,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        SaveNumber(type){
            dispatch({
                type: "ChangeNumber",
                payload: type
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Numbers);