import React, { Component } from 'react'
import './Home.css'


class Home extends Component {
    // JS Start
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
    // HTML Start

    render() { 
        return ( 
            <div className='p-5'>
                <div> Name: {this.state.name} </div>
                <button type='button' className='btn-primary' onClick={()=>this.ChangeName()} > Change Name </button>
            </div>
        );
    }
} 
export default Home;