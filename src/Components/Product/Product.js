import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { handleAddToCart } = props
    const { name, img, seller, price, ratings, } = props.product


    return (
        <div className='product'>
            <img src={img} alt="" onError={((e) => { e.currentTarget.src = "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg" })} />
            <div className='product-info'>
                <p className='product-name' >{name}</p>
                <p>price:${price}</p>
                <p><small>seller:{seller}</small></p>
                <p><small>Ratings:{ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;