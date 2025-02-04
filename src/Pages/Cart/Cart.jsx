import React, { useContext } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/Store-context'
// import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalCartAmount}
=useContext(StoreContext)
const navigate=useNavigate()
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br></br>
        <hr></hr>
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return (
              <>
              <div className='cart-items-title cart-items-item'>
              <img src={item.image}></img>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${cartItems[item._id]*item.price}</p>
              <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr></hr>
              </>
            )
          }
        })}
      </div>
      <div className='card-bottom'>
        <div className='card-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0: getTotalCartAmount()+2}</p>
            </div>
            <div className='cart-total-details'>
              <b>Total</b>
              <b>${getTotalCartAmount()}</b>
            </div>
          </div>
            <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
        </div>
        <div className='card-promo-code'>
          <div>
          <p>If you have a promo code, Enter it here</p>
          <div className='cart-promo-code-input'>
            <input type='text' placeholder='promo code'></input>
            <button>Submit</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
