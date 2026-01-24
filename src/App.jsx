import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductDetail from './pages/ProductDetail'
import Footer from './components/Footer'

import { ToastContainer, toast, Bounce } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchFilter from './components/SearchFilter'

export default function App() {
  return (
    <div className='bg-gray-950 font-sans min-h-screen'>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={1497}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}