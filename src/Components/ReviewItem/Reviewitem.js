import { faTrashAlt, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const Reviewitem = ({ product, handleRemoveItem }) => {
    const { name, price, quantity, img, shipping, id } = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>price: ${price}</small></p>
                    <p><small>shipping: ${shipping}</small></p>
                    <p><small>quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button className='btn-delete' onClick={() => handleRemoveItem(id)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reviewitem;