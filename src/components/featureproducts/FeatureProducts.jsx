import React from 'react';
import './featureproducts.css';
import Fdata from './Fdata';
import { FaCartPlus, FaHeart, FaStar } from "react-icons/fa";

const FeatureProducts = ({addToWatchlist , addToCart}) => {
  return (
    <div className='featureproducts container'>
      <h1 className='title'>Feature Products</h1>
      <div className="feature-parent">
        {Fdata.map(item =>{
          return(
             <div className="fproduct" key={item.id}>
              <img src={item.image} alt="" loading='lazy' />
              <h2>{item.title}</h2>
              <div className="product-price">
              <h3>${item.price}.00</h3>
              <h4>${item.prevprice}.00</h4>
              </div>
              <div className="fproduct-icons">
              <FaStar className='star-icon'/>
              <FaStar className='star-icon'/>
              <FaStar className='star-icon'/>
              <FaStar className='star-icon'/>
              <FaStar className='star-icon'/>
              </div>
              <div className="fproduct-control">
                <FaHeart className='fproduct-btn' onClick={ ()=> addToWatchlist(item)}/>
                <FaCartPlus className='fproduct-btn' onClick={()=> addToCart(item)}/>
              </div>
             </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeatureProducts
