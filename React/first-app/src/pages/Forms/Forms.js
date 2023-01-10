import React, { Component } from 'react'
import UserCard from '../../components/UserCard';

class Forms extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        email:'',
        password: '',
        users:[],
    }
    onChangeFn(e) {
        e.target.id == "email" ?  this.setState({ email: e.target.value}) : this.setState({ password: e.target.value})
    }
    showResult(){
        let user = {
            email:this.state.email,
            pass:this.state.password,
            selected: false
        }
        let userArr = this.state.users;
        userArr.push(user);
        this.setState({users: userArr, email:"", password:""})
        console.log(this.state.users)
    }
    SwapColor = (index) =>{
    let users = this.state.users
    users[index].selected = !users[index].selected
    this.setState({users:users})
    
    }
    render() { 
        return ( 
    <div>
        <div className='row p-5' style={{textAlign:'left'}}>
            <form className='col-5'>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange={(e)=>this.onChangeFn(e)} className="form-control" value={this.state.email} id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" onChange={(e)=>this.onChangeFn(e)} className="form-control" value={this.state.password} id="password" placeholder="Password"/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="button" className="btn btn-primary" onClick={()=>this.showResult()}>Submit</button>
            </form>
        </div>
                    <div className='row'>
                    {
                    this.state.users.map((user,index) => 
                        <div className='col-3 p-2' >
                        <UserCard users = {user} SwapColorFN = {this.SwapColor} index={index}/>
                        </div>
                        )
                    }
                    </div>
    </div>
        );
    }
}

export default Forms;