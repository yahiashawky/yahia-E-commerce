import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaCartPlus, FaStar } from "react-icons/fa";

const FakeDetails = ({addToCart}) => {
    
    const [product , setProduct] = useState([]);
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    }, [])
    
    let {id} = useParams();
  return (
    <div className='product-details container'>
        <div className="product-details-img">
        <img src={product.image} alt="" />
        </div>
        <div className="product-info">
        <h2>{product.category}</h2>
        <h3>{product.title}</h3>
        <div>
            <FaStar className='star-icon'/>
            <FaStar className='star-icon'/>
            <FaStar className='star-icon'/>
            <FaStar className='star-icon'/>
            <FaStar className='star-icon'/>
        </div>
        <p>{product.description}</p>
        <h2>${product.price}</h2>
        <button onClick={()=> addToCart(product)}> <FaCartPlus/>Add To Cart</button>
        </div>
    </div>
  )
}

export default FakeDetails
