import React, { useEffect, useState } from 'react'
import { FaCartPlus, FaStar } from 'react-icons/fa6';
import { useParams } from 'react-router-dom'

const DummyDetails = ({addToCart}) => {

    let {id} = useParams();

    const [product , setProduct] = useState([]);

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    } ,[])

  return (
    <div className='product-details container'>
        <div className="product-details-img">
            <img src={product.thumbnail} alt="" />
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
                    <h3>Count :{product.stock}</h3>
                    <button onClick={()=> addToCart(product)}> <FaCartPlus/>Add To Cart</button>
        </div>
      
    </div>
  )
}

export default DummyDetails
