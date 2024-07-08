import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/Store-context'
const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
      return (
    <div>
      <form className='place-order'>
        <div className='place-order-left'>
          <p className='title'>Delivery Information</p>
          <div className='multi-fields'>
            <input type='text' placeholder='First Name'></input>
            <input type='text' placeholder='Last name'></input>
          </div>
          <input type='email' placeholder='Email address'></input>
          <input type='text' placeholder='Street'></input>
          <div className='multi-fields'>
            <input type='text' placeholder='City'></input>
            <input type='text' placeholder='State'></input>
          </div>
          <div className='multi-fields'>
            <input type='text' placeholder='Zip code'></input>
            <input type='text' placeholder='Country'></input>
          </div>
          <input type='text' placeholder='Phone'></input>
        </div>
        <div className='place-order-right'>
        <div className='card-total'>
          <h2>Cart Totals</h2>
          <div>
            
          <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>


            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
            <div className='cart-total-details'>
              <b>Total</b>
              <b>${getTotalCartAmount()}</b>
            </div>
          </div>
            <button>Proceed to Pay </button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder
