import { useQuery } from 'react-query';
import React from 'react';
import './Product.css';
import Line from '../../asserts/Line 18.png';
import ProductContainer from '../../util-helper-components/ProductContainer';

const Product = () => {

    const getProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        return res.json();
    }

    const { data, error, isLoading } = useQuery('getproduct', getProducts);

    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className='Product-Container'>
            <div className='header-Product'>
                <div className='headline-product'><h2>New products</h2><img src={Line} alt='thisisanlineimage' /><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 0L12.789 9.21102L22 11L12.789 12.789L11 22L9.21102 12.789L0 11L9.21102 9.21102L11 0Z" fill="black" />
                </svg></div>
                <div className='lines'>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="56" height="6" viewBox="0 0 56 6" fill="none">
                        <path d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z" fill="#161615" />
                    </svg></div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="56" height="6" viewBox="0 0 56 6" fill="none">
                        <path d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z" fill="#161615" />
                    </svg></div>
                </div>
            </div>
            <div className='body-Product'>
                <div className='navigation-list'>
                    <span>Apparel</span>
                    <span>Accessories</span>
                    <span>Best Sellers</span>
                    <span>50% Off</span>
                </div>
                <div className="product-carts">
                    {data.map((product) => <ProductContainer key={product.id} image={product.image} title={product.title} desc={product.description} price={product.price} />)}
                </div>
            </div>
        </div>
    )
}

export default Product