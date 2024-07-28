import React, { useContext } from 'react';
import {ShopContext} from "../../context/shop-context";

export const Product = (props) => {
  const {id, productName, Price, productImage}=props.data;
  const {addToCart,cartItems}=useContext(ShopContext);

  const cartItemAmount=cartItems[id];

  return (
    <div className='product'>
        <img src={productImage} alt='Things'/>
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>
            <i class="fa fa-inr"></i> {Price}
            </p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
          Add to Cart {cartItemAmount>0 && <> ({cartItemAmount})</>}</button>
    </div>
  );
};

