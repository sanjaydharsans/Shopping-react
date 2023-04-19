import React from 'react'
import './ShoppingCart.css';
import  { useState } from "react";
const ShoppingCart = (props) => {
    const {product, index, handleonclick} = props;
  return (
    <div id="w">
        
          <div id="page">

            <table id="cart">
              <thead>
                <tr>
                  <th className="first">Photo</th>               
                  <th className="third">Product</th>
                  <th className="fourth">Line Total</th>
                  <th className="fifth">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr className="productitm">
                  <td><img src={product.image} className="thumb" /></td>
                  <td>{product.productName}</td>
                  <td>$ {product.price}</td>
                  <td><span className="remove"><img src="https://i.imgur.com/h1ldGRr.png" alt="X" onClick={(event) => handleonclick(event.target.value)} /></span></td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
  )
}
export default ShoppingCart;