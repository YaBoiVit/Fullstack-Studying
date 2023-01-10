import React, { Component } from 'react'
import { connect } from 'react-redux';

class Userform extends Component {
    name = "";
    mail = "";
    constructor(props) {
        super(props);
    }
    onChangeFn(e) {
        e.target.id == "nameinput" ?  this.name = e.target.value : this.mail = e.target.value 
    }
    PushUser = () =>{
        let userArr = {
            name: this.name,
            mail: this.mail
        }
    this.props.AddUser(userArr)
    }
    render() { 
        return (  
            <div> 
            <form className='mr-2'>
                <div className="form-group">
                    <label>Name</label>
                    <input type="email" onChange={(e)=>this.onChangeFn(e)} className="form-control" id="nameinput" aria-describedby="emailHelp" placeholder="Enter name"/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" onChange={(e)=>this.onChangeFn(e)} className="form-control" id="mailinput" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <button type="button" className="btn btn-primary" onClick={()=>this.PushUser()}>Submit</button>
            </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
            AddUser(userArr){
                dispatch({
                    type:"AddUser",
                    payload: userArr
                })
            }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Userform);