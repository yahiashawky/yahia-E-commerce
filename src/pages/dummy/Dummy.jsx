import React, { useEffect, useState } from 'react'
import {FaHeart , FaCartPlus} from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const Dummy = ({addToCart , addToWatchlist}) => {

    let [dummy , setDummy] = useState([])

    useEffect(function(){
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
            setDummy(data.products)
        })
    },[])
  return (
    <div className='dummy container'>
       <div className="title">
        <h2>dummy Products</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel illum ut sint eius harum sit sed delectus natus odio possimus commodi, cumque laborum quaerat! Voluptas est illo tenetur veritatis.</p>
        </div>
        <div className="products">
            {
                dummy.map(function(item){
                    return(
                       <div className="product">
                        <Link to={`/dummydetails/${item.id}`}>
                        <img src={item.thumbnail} alt="" />
                        </Link>
                        <h3>{item.title.slice(0,15)}</h3>
                            <div>
                            <FaHeart className='product-icon' onClick={()=> addToWatchlist(item)}/>
                            <FaCartPlus className='product-icon'  onClick={()=> addToCart(item)}/>
                            </div>
                       </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Dummy
