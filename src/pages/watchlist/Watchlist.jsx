import React from 'react'
import './watchlist.css'
import { FaCartPlus } from "react-icons/fa";

const Watchlist = ({watchlistitems , addToCart , removeFromWatchlist}) => {
  return (
    <div className='watchlist container'>
      <h1 className='title'>WatchList Products</h1>
      {
        watchlistitems.length >= 1 ?
        <div className="watched-products">
            {watchlistitems.map(function(product){
                return(
                    <div className="watched-product">
                    <img src={product.image ? product.image : product.thumbnail} alt="" />
                    <h3 className='title'>${product.price}</h3>
                    <h3 className='watch-title'>{product.title.slice(0,10)}</h3>
                  <button className='add-to-cart' onClick={()=> addToCart(product)}> <FaCartPlus/> add to Cart</button>
                  <button onClick={()=> removeFromWatchlist(product)}>Remove From WatchList</button>
                   </div>
                )
            })}
        </div> :
        <p className='empty-watchlist'>There are No Products Watched</p>
      }
    </div>
  )
}

export default Watchlist
