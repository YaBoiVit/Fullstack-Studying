import React, { Component } from 'react'
import { connect } from 'react-redux';

class Usertable extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (  
            <div> 
                <table className="table table-light">
                    <thead>
                    <tr>
                        <th scope="row"> Name </th>
                        <th scope="row"> Mail </th>
                        <th scope="row"> Remove </th>
                        <th scope="row"> Favorites </th>
                    </tr>
                    </thead>
                    <tbody>
                        { this.props.users.map((user,i)=> <tr key={i}>
                            <th scope="row"> {user.name} </th>
                            <td> {user.mail} </td>
                            <td><button type='button' className='btn btn-primary' onClick={()=>this.props.CheckUser(i,0)}> Delete </button></td>
                            <td><button type='button' className='btn btn-primary' onClick={()=>this.props.CheckUser(user,1)}> Add </button></td>
                        </tr>)}
                    </tbody>
                </table>
                <table className="table table-light">
                    <thead>
                    <tr>
                        <th scope="row"> Name </th>
                        <th scope="row"> Mail </th>
                        <th scope="row"> Remove </th>
                    </tr>
                    </thead>
                    <tbody>
                        { this.props.favorites.map((user,i)=> <tr key={i}>
                            <th scope="row"> {user.name} </th>
                            <td> {user.mail} </td>
                            <td><button type='button' className='btn btn-primary' onClick={()=>this.props.CheckUser(i,0)}> Delete </button></td>
                        </tr>)}
                    </tbody>
                </table>
                </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        users:state.users,
        favorites: state.favorites
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        CheckUser(index,type){
            if (type == 0) {
                dispatch({
                    type: "DeleteUser",
                    payload: index
                })
            }
            else{
                dispatch({
                    type:"SaveUser",
                    payload: index
                })
            }
                

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Usertable);