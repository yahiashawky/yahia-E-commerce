import React from 'react';
import Categories from '../components/categories/Categories';
import FeatureProducts from '../components/featureproducts/FeatureProducts';
import Header from '../components/header/Header.jsx';
import Partner from '../components/partners/Partner';
import Services from '../components/sevices/Services';


const Home = ({addToWatchlist , addToCart}) => {
  return (
    <div>
      <Header/>
      <Services/>
      <Categories/>
      <FeatureProducts addToWatchlist = {addToWatchlist} addToCart = {addToCart}/>
      <Partner/>
    </div>
  )
}

export default Home
