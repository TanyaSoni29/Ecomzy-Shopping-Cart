import React from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux'
import {remove} from "../redux/slices/CartItemslice"

function CartItems({item, itemIndex}) {
    const dispatch = useDispatch();

   function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item Removed");
   }

  return (
    <div className=' border-b-2 border-slate-400'>
    <div className='flex justify-center gap-x-10 items-center mb-8'>
     
      <div className=''>
        <img className='h-[180px] w-[180px] mt-2' src={item.image} />
      </div>
      <div className=''>
         <h1 className='font-bold text-slate-800'>{item.title}</h1>
         <h1 className='font-semibold text-slate-500'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
         <div className='flex items-center justify-between'>
         <p className='text-green-800 font-bold'>${item.price}</p>
         <div onClick={removeFromCart} className=' bg-red-200 rounded-full text-center p-4'> 
         <MdDelete className='text-red-600 text-1xl'/>
         </div>
         </div>
      </div>
     
      
      
    </div>
     
    </div>
  )
}

export default CartItems
