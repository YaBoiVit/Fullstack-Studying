import React, { Component } from 'react'

class Basket extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                {this.props.basket.map(product=>
                    <div key={product.id}>
                    <div>{product.name}--{product.price}</div>
                    </div>)}
            </div>
        );
    }
}

export default Basket;