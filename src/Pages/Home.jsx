import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addWishlistItem } from '../redux/slice/wishlistSlice'
import { addItemToCart } from '../redux/slice/cartSlice'



function Home() {
  const data =useFetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch = useDispatch()
  
  return (
   
     <div className='pt-40 mb-10 px-20 md:grid grid-cols-4'>
      {data?.length>0 &&
      data?.map((item)=>(
        
      
      <div className=' p-2'>
      <div className='p-3 rounded shadow-lg'>
          <img src={item?.image} alt="no image" className='w-full h-72' />
          <h4 className='text-center text-3xl'>{item?.title.slice(0,25)}</h4>
          <p className='text-justify'>{item?.description.slice(0,100)}</p>
          <p className='text-justify'>price:<span className='text-violet-600'> {item?.price}</span></p>
          <div className='flex justify-between'>
            <button onClick={()=>dispatch(addWishlistItem(item))} className='p-3 rounded bg-red-700 text-white'><FontAwesomeIcon icon={faHeart} /></button>
            <button onClick={()=>dispatch(addItemToCart(item))}className='p-3 rounded bg-red-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
          </div>
        </div>
      </div>
      ))
       }
     
    </div>
  )
}

export default Home
