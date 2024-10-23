import React from 'react'

import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    
        <div className='min-h-80 bg-violet-900 p-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)]'>
            <div className=' md:p-2'> 
                 <div className='flex items-center'>
                     <FontAwesomeIcon icon={faCartShopping} style={{color: "#f1f2f4",}} className='fa-2x p-5'   /> 
                     <h1 className='my-4 fa-2x mx-5 text-3xl font-semibold text-white'>E-CART</h1>
                 </div>
            <div className='text-white'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et minima iste quis quam, quibusdam ipsum eaque necessitatibus ad officiis amet tempora architecto possimus iusto ab eos nulla mollitia saepe?</div>

            </div>
        
        <div className=' md:p-2'><div><h1 className='my-4 fa-2x md:mx-5 text-3xl font-semibold text-white'>Links</h1></div>
        <div className='my-5 md:mx-5 text-white  '>
            <Link to={'/'}><h3>Home</h3></Link>
            <Link to={'/wishlist'}><h3>Wishlist</h3></Link>
           <Link to={'/cart'}> <h3>cart</h3></Link>
        </div>
        </div>
        <div className=' md:p-2'>
        <div><h1 className='my-4 fa-2x md:mx-5 text-3xl font-semibold text-white'>Guides</h1></div>
     <div className='my-5 md:mx-5 text-white  '>
            <h3>React</h3>
            <h3>React Bootstrap</h3>
            <h3>Bootswatch</h3>
        </div>

        </div>
        <div className=' md:p-2'>
        <div><h1 className='my-4  fa-2x md:mx-5 text-3xl font-semibold text-white'>Contact us</h1></div>
    <div className='flex'>
         <input type="text" className='  h-10 rounded-md ps-4 w-full me-2' placeholder='email id' />
         <button type="button" className='bg-orange-500 rounded text-center' >Subscribe</button>
    </div>
     
     <div className=' flex justify-between  p-2 fa-2x'>
     <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#e8eaed",}} />
     <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} />
     <FontAwesomeIcon icon={faFacebook} style={{color: "#f9fafa",}} />
     <FontAwesomeIcon icon={faInstagram} style={{color: "#ededed",}} />
     </div>
     </div>

        </div>
       
    
  )
}

export default Footer
