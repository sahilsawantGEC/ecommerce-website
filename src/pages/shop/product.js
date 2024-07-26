import React from 'react';

export const Product = (props) => {
  const {id, productName, Price, productImage}=props.data;
  return (
    <div className='product'>
        <img src={productImage}/>
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>
                ${Price}
            </p>
        </div>
        <button className='addToCartBttn'>Add to Cart</button>
    </div>
  );
};



