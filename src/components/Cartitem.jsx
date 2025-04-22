import React from 'react'
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import {toast} from 'react-hot-toast';
import {remove} from "../redux/slices/CartSlice";

const Cartitem = ({item, itemIndex}) => {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item removed");
    }
  return (
    <div className='w-1/2'>
        <div className='flex'>
            <div>
                <img className='h-28 w-36'
                src={item.image} alt="" />
            </div>
            <div className='m-10'>
                <h1 className='font-semibold'>{item.title}</h1>
                <h1 className='mt-5 text-gray-600'>{item.description.split(" ").slice(0, 14).join(" ")+"..."}</h1>
                <div className='mt-5 flex justify-between mr-5'>
                    <p className='text-green-600 font-semibold '>${item.price}</p>
                    <div className='bg-green-400 w-8 h-8 relative rounded-full'
                    onClick={removeFromCart}>
                        <FcDeleteDatabase className='pl-2 pt-2 text-2xl'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cartitem