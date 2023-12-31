import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, clearCart, children } = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2)
    const grandTotal = total + shipping + +tax;
    return (
        <div className='cart'>
            <h3>order summary</h3>
            <p>selected item: {quantity}</p>
            <p>Total price:${total}</p>
            <p>Total Shipping:${shipping}</p>
            <p>Tax:${tax}</p>
            <h5>Grand Total:{grandTotal.toFixed(2)}</h5>
            {/* <button onClick={clearCart}>clear cart</button> */}
            {children}
            {console.log(children)}
        </div>
    );
};

export default Cart;