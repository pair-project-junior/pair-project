import React, { useState, useEffect } from 'react';


const CartList = ({ cartItems }) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(cartItems);
  }, []);

  const totalPrice = data.reduce((total, e) => total + e.price, 0);

  return (
    <div className='cart-list'>
      <h1>My cart</h1>
      {data.map((e, i) => (
        <div className='cart-item' key={i}>
          <span>Product Name: {e.name}</span>
          <span>Price: {e.price}$</span>
          <button className='cart-list-button'>Remove</button>
        </div>
      ))}
      <h3>Total: {totalPrice}$</h3>
      <button>checkout</button>
    </div>
  );
}

export default CartList;
