import React from 'react'
import './cart.css'

const Cart = ({cartitems , removeFromCart , addToCart , decrease}) => {
  // let total = 0;
  return (
    <div className='cart container'>
      <h1 className='title'>Cart Items </h1>
      {
        cartitems.length >= 1 ?
        <div className="cart-content">
        <div className="cart-products">
          {
            cartitems.map(function(item){
              // total += item.price
              return(
                <div className="cart-product">
                  <div className="img">
                  <img src={item.image? item.image : item.thumbnail} alt="" />
                  <h5>x{item.qty}</h5>
                  </div>
                  <h4>${item.price}</h4>
                  <div className='counter'>
                    <button onClick={()=> decrease(item)}>-</button>
                    <h4>{item.qty}</h4>
                    <button onClick={()=> addToCart(item)}>+</button>
                  </div>
                  <h3>${(item.price * item.qty).toString().slice(0,6)}</h3>
                  <button onClick={()=> removeFromCart(item)}>Remove From Cart</button>
                </div>
              )
            })
          }
        </div>
        <div className="total">
          <h2>Total :</h2>
          <span>$ 
             {
             cartitems.reduce(function(acc,curr){
               return(
                acc + (curr.price*curr.qty)
                )
            },0).toString().slice(0 , 7)}
            </span>
        </div>
      </div> : 
      <h2 className='empty-cart'>There are No Products in the Cart</h2>
      }

    </div>
  )
}

export default Cart
