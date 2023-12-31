import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const { products, initialCart } = useLoaderData()
    const [cart, setCart] = useState(initialCart)
    // console.log(products)

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }


    // useEffect(() => {
    //     const storedCart = getStoredCart()
    //     const savedCart = []
    //     for (const id in storedCart) {
    //         const addedProduct = products.find(product => product.id === id)
    //         if (addedProduct) {
    //             const quantity = storedCart[id]
    //             addedProduct.quantity = quantity
    //             savedCart.push(addedProduct);
    //         }
    //         setCart(savedCart)
    //     }
    // }, [products])

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product === selectedProduct.id)
        if (!exist) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exist.quantity = exist.quantity + 1
            newCart = [...rest, exist]

        }

        // console.log(newCart);
        setCart(newCart)
        addToDb(selectedProduct.id)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/orders'>
                        <button>Review order</button>
                    </Link>
                </Cart>

            </div>
        </div>
    );
};

export default Shop;