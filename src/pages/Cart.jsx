import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItems from '../components/CartItems'

function Cart() {
  const {cart} =useSelector(state => state)
  const[totalAmount, setTotalAmount] = useState(0);

  useEffect( () =>{
     setTotalAmount( cart.reduce( (acc, crr) => acc + crr.price, 0))
  },[cart])

  return (
    <div className='mt-[40px]'>
   
      {
        cart.length>0 ?
        (
          <div className='flex gap-x-20 h-[80vh] mt-10 max-w-6xl mx-auto'>
            <div className='w-full h-full ml-5'>{
              cart.map( (item,index) => (
              <CartItems key={item.id} item={item} itemIndex={index}/>
              ))
             }

            </div>
            <div className='flex flex-col w-full h-full justify-between'>
             <div className='h-full w-full'>
                <div className='text-green-700 font-bold uppercase text-1xl'>Your Cart</div>
                <div className="text-green-800 -mt-[8px] font-bold uppercase text-[40px]">Summary</div>
                <p className='font-bold mt-20'><span>Total Items: {cart.length}</span></p>
              </div>
             
             
              <div className=''>
              <p className='font-bold mb-4'><span className='font-bold text-slate-600'>Total Amount: </span>${totalAmount}</p>
              <button className='bg-green-700 w-full text-white font-bold rounded-lg p-5 px-10'>Checkout Now</button>
             </div>
             </div>
            
          </div>
        
        ):
        (<div className='flex flex-col justify-center items-center h-[80vh] gap-4'>
           <h2 className='font-bold text-2xl'>Your Cart is Empty</h2>
           <NavLink to="/">
            <button className='bg-green-700 rounded-full p-4 px-6  text-lg font-bold hover:bg-green-600 transition duration-200 ease-in text-white'>
              Shop Now
            </button>
           </NavLink>

        </div>)
      }
      
    </div>
  )
}

export default Cart
