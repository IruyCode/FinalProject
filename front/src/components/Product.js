import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = () => {
  return (
      <div className="product"> 
        <img src="https://techprincess.it/wp-content/uploads/2020/07/playstation-5-545x307.jpg" alt="product name" />

        <div className="product__info">
            <p className="info__name">Product 1</p>
            <p className="info__description">Lorem Ipsum</p>
            <p className="info__price">$499.99</p>

            <Link to={`/product/${1111}`} className="info__button">View</Link>
        </div>
      </div>
  )
};

export default Product;
