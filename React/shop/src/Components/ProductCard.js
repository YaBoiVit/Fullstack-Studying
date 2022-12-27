import React from 'react'
import './Components.css'

function ProductCard(props) {
    let imgUrl = "/img/" + props.product.id + "." + props.product.imageType;
return (
        <div className='MainDiv col-4'>
            <div className="card">
                <div className='ImgCardDv'>
                    <img className="card-img-top imgcard" src={imgUrl}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.product.name}</h5>
                    <p className="card-text">{props.product.price} Ils </p>
                    <a href="#" className="btn btn-primary" onClick={()=>props.addToBasket(props.product)} > Add To Basket </a>
                </div>
            </div>
        </div>
)
}

export default ProductCard