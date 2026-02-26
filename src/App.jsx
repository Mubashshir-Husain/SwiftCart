import React from 'react'
import Navbar from './components/Navbar.jsx'
import ProductList from './pages/ProductList.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Footer from './components/Footer.jsx'

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