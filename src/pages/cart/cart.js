import React, { useContext } from 'react'
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import './cart.css'
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount(); 

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
      <h1>
        Your Cart Items 
      </h1>
      </div>
      <div className="cart">
         {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null; // Add this to avoid returning undefined
           })}
           </div>


      {totalAmount > 0 ? (
      <div className='checkout'>
        <p>
          Subtotal: <i class="fa fa-inr"></i> {totalAmount}
        </p>
        <button onClick={() => {navigate("/")}}> Continue Shopping</button>
        <button 
         onClick={() => {
          checkout();
          navigate("/checkout");
        }}
        >
           {" "}
           Checkout{" "}
        </button>
      </div>
      ):(
          <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};


