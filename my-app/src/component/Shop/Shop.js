import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css';
import Products from '../Products/Products';

const Shop = () => {
  // প্রথম ১০টি পণ্য লোড করা
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);

  // কার্টে প্রোডাক্ট যোগ করতে হলে এটি ব্যবহার করুন
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    console.log('Product added:', product);
    // কার্টে প্রোডাক্ট যোগ করুন
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      {/* পণ্য দেখানোর জন্য */}
      <div className="product-container">
        <ul>
          {products.map((pd) => (
            <Products
              key={pd.id} // প্রতিটি প্রোডাক্টের জন্য ইউনিক কি
              product={pd}
              handleAddProduct={handleAddProduct} // ফাংশন পাস করা হচ্ছে
            ></Products>
          ))}
        </ul>
      </div>
      {/* কার্ট দেখানোর জন্য */}
      <div className="cart-container">
        <h1>Cart</h1>
        {/* কার্টের প্রোডাক্ট সংখ্যা দেখানো */}
        <h3>Total Items: {cart.length}</h3>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Shop;
