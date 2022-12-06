import React, { Component } from 'react'
import './card.css'

class CardComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='MainDiv'>
                <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.desc}</p>
                        <a href="#" className="btn btn-primary">Button of {this.props.title}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardComponent;