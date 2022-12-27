import React, { Component } from 'react'
import Basket from '../Components/Basket';
import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard';

class Shop extends Component {
    state = { 
        products:[
            {id:1,name:"Milk",price:7,qnt:1,imageType:"png"},
            {id:2,name:"Cola",price:10,qnt:1,imageType:"png"},
            {id:3,name:"Bamba",price:5,qnt:1,imageType:"jpg"},
            {id:4,name:"Yellow Cheese",price:17,qnt:1,imageType:"jpg"},
            {id:5,name:"Bread",price:12,qnt:1,imageType:"png"},
            {id:6,name:"Coffee",price:34,qnt:1,imageType:"jpg"},
        ],
        FilterProducts:[],
        basket:[],
        TotalSum:0
    }
    constructor(props) {
        super(props);}

    componentDidMount(){
        this.setState({FilterProducts:this.state.products})
    }
    AddToBasket=(product)=>{
        console.log(product)
        let basket = this.state.basket;
        let exist = basket.find(prod=>prod.id === product.id);
        if(exist){
            exist.qnt++;
        }
        else{
            basket.push(product);
        }
        console.log(basket)
        this.calculateTotal();
        this.setState({basket})
    }
    calculateTotal=()=>{
        let sum = 0
        this.state.basket.map(product=>{
            sum += product.price * product.qnt
        })
        this.setState({TotalSum:sum})
    }
    SearchProduct=(event)=>{
        console.log(event.target.value)
        let filter = this.state.products.filter(product=>product.name.startsWith(event.target.value))
        this.setState({FilterProducts:filter})
    }
    render() { 
        return ( 
            <div className='row'>
                <div className='col-9'> 
                    <div className="form-group p-1">
                        <input type="text" onChange={(e)=>this.SearchProduct(e)} className="form-control searchInput" placeholder="Search"/>
                    </div>
                <div className='row'>
                {this.state.FilterProducts.map((product) => <ProductCard key={product.id} addToBasket={this.AddToBasket} product={product}/>)}
                </div>
                </div>
                <div className='col-3'> <Basket products={this.state.products} basket={this.state.basket} /> 
                <hr/> <div> Total: {this.state.TotalSum}</div>
                </div>
            </div>
        );
    }
}

export default Shop;