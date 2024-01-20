import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from "react-hot-toast"
import {add, remove} from "../redux/slices/CartItemslice"

function Product({post}) {
    const {cart} = useSelector(state => state);
    const dispatch = useDispatch()

    function removeItem() {
     dispatch(remove(post.id));
     toast.error("Item Remove From Cart")
    }

    function addToCart() {
      dispatch(add(post));
      toast.success("Item Added To Cart")
    }
  return (
    <div className='flex flex-col items-center justify-between transition-all duration-300 hover:scale-110 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title.split(" ").slice(0,3).join(" ") + "..."}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className='h-[180px]'>
        <img className="h-full w-full" src={post.image}/>
      </div>
      <div className='flex justify-between gap-12 items-center w-full mt-5'>
        <p className='text-green-600 font-semibold'>${post.price}</p>
        <div>
       {
          cart.some( (p) => p.id === post.id) ? (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={removeItem}>Remove Item</button>): (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={addToCart}>Add To cart</button>)
       }
      </div>
      </div>
      
    </div>
  )
}

export default Product
