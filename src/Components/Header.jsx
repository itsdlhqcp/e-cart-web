import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



function Header() {
  const WishlistArray = useSelector(state=>state.Wishlist)

  
  const CartArray = useSelector(state=>state.cartItem) 

  
  const [show, setshow] = useState(false)


  const change = () => {
    setshow(!show)
  }
  return (
    <>
      <div className='bg-violet-900 p-2 w-100 min-h-20  text-white md:flex-items-ceter pt-4 md:pt-0 fixed w-full'>
        <div className='flex justify-between'>

          <div className='flex items-center w-full px-5'>
           <Link to={'/'}>
              <FontAwesomeIcon icon={faCartShopping} className='fa-2x text-white' />
              <h1 className='text-3xl text-white ms-1'>e-Cart</h1>
           </Link>
            <button onClick={change} className='border border-white p-2 rounded ms-auto md:hidden'><FontAwesomeIcon icon={faBars} /></button>
          </div>
         
          <div className='md:flex ms-auto hidden'>
          <Link to={'/wishlist'}>
              <button className='flex items-center bg-violet-900 text-white border-white rounded me-4 px-4 py-3 hover:bg-white hover:text-violet-900'>
                <FontAwesomeIcon icon={faHeart} className='me-2' style={{ color: 'red' }} />Wishlist <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{WishlistArray.length}</span></button>
          </Link>
           <Link to={'/cart'}>
              <button className='flex items-center bg-violet-900 text-white border-white rounded me-4 px-4 py-3 hover:bg-white hover:text-violet-900'>
                <FontAwesomeIcon icon={faHeart} className='me-2' style={{ color: 'red' }} />cart <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{CartArray.length}</span></button>
           </Link>
          </div>
        </div>
        {show && <div className='flex ms-auto md:hidden'>
           <Link to={'/wishlist'}>
              <button className='flex items-center bg-violet-900 text-white border-white rounded me-4 px-4 py-3 hover:bg-white hover:text-violet-900'>
                <FontAwesomeIcon icon={faHeart} className='me-2' style={{ color: 'red' }} />Wishlist <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{WishlistArray.length}</span></button>
           </Link>
           <Link to={'/cart'}>
              <button className='flex items-center bg-violet-900 text-white border-white rounded me-4 px-4 py-3 hover:bg-white hover:text-violet-900'>
                <FontAwesomeIcon icon={faHeart} className='me-2' style={{ color: 'red' }} />cart <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{CartArray.length}</span></button>
           </Link>
          </div>}
      </div>
    </>
  )
}

export default Header
