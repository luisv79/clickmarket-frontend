
import { Routes, Route } from 'react-router-dom'  
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import MyAccount from './pages/Myaccount' 
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/myaccount" element={<MyAccount />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
      
    
      
     
    </>
  )
}

export default App
