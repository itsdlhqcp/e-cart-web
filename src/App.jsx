


import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
