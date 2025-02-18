import React, { useEffect, useState } from 'react'
import './fake.css'
import { FaHeart , FaCartPlus} from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Fake = ({addToCart , addToWatchlist}) => {

    let [products , setProducts] = useState([])

    useEffect(function(){
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    } ,[])


    
  return (
    <div className='fake container'>
        <div className="title">
        <h2>Fake Products</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel illum ut sint eius harum sit sed delectus natus odio possimus commodi, cumque laborum quaerat! Voluptas est illo tenetur veritatis.</p>
        </div>
        <div className="products">
            {
                products.map(function(product){
                    return(
                        <div className="product">
                           <Link to={`/fakedetails/${product.id}`} className='link'>
                             <img src={product.image} alt="" />
                           </Link>
                            <h3>{product.title.slice(0,15)}</h3>
                            <div>
                            <FaHeart className='product-icon' onClick={()=> addToWatchlist(product)}/>
                            <FaCartPlus className='product-icon' onClick={()=> addToCart(product)}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Fake
