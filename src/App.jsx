import React from 'react'
import Navbar from './Components/Navbar'
import { Routes , Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart/Cart'
import Footer from './Components/Footer'
import ContactUs from './pages/ContactUs';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import User from './components/User';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product/:id' element= {<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/user" element={<User />} /> 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App