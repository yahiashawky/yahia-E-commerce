import React from 'react'
import FeatureProducts from '../components/featureproducts/FeatureProducts';


const Shop = ({addToWatchlist , addToCart}) => {
  return (
    <div>
      <FeatureProducts addToWatchlist = {addToWatchlist} addToCart = {addToCart}/>
    </div>
  )
}

export default Shop
