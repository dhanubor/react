import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Products = (props) => {
    console.log(props.product);
  const{img, name, price, seller, stock} = props.product;  
    return (
        <div className='contanier'>
            <div className="imges">
                <img src={img} alt="" />
            </div>
            <div className="productName">
            <h4>
                {name}
            </h4>
            <br />
            <p><small>By : {seller} </small></p>
            <p>Price: ${price}</p>
            <br />
            <p><small>Only {stock} left instock Order soon</small></p>
            <button className='main-button' onClick={() => props.handleAddProduct(props.product)}>  <FontAwesomeIcon icon={faCartShopping} size="1x" style={{ color: 'black' }} /> 
            Add to Cart</button>
            </div>
        </div>
    );
};

export default Products;