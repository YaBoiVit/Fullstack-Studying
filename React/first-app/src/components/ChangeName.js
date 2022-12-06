import React, { Component } from 'react'
import Home from '../pages/Home/Home';

class ChangeName extends Component {
    state = { 
        name: "",
        mail: "",
        phone: "",
        movies: []
    }
    constructor(props) {
        super(props);
        this.state.name = "Vitali"
        this.state.mail = "Mail"
        this.state.phone = "123"
    }

    ChangeName(){
        this.setState({ name:'Vit'})
    }

    render() { 
        return ( 
        <div>
            <div> Name: {this.state.name} </div>
            <button type='button' className='btn-primary' onClick={()=>this.ChangeName()} > Change Name </button>
        </div> );
    }
}

export default ChangeName;