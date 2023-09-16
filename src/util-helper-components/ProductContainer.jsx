import React from 'react';
import './helper.css';

const ProductContainer = ({ image, title, desc, price }) => {
    return (
        <div className='container'>
            <div className='container-image'>
                <img src={image} alt="ProductImage"/>
            </div>
            <div className='container-details'>
                <h3>{title.toUpperCase()}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, commodi.</p>
                <span>${price}</span>
            </div>

        </div>

    )
};

export default ProductContainer;