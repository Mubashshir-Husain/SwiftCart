import React from 'react'
import { Link } from 'react-router-dom'
import { House, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContaxt'

export default function Navbar() {

  const {cartCount} = useCart();

  return (
    <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-950/70 border-b border-orange-900">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Left side - Logo */}
       <Link to={'/'}>
         <div className="flex items-center gap-3 cursor-pointer">
          <House className="text-orange-500" size={28} />
          <h1 className="text-2xl font-bold tracking-wide">
            Swift<span className="text-orange-500">Cart</span>
          </h1>
        </div>
       </Link>

        {/* Right side - Cart Icon */}
      <Link to={'/cart'}>
          <div className="relative cursor-pointer">
          <ShoppingCart className="text-orange-500" size={28} />
          
          {/* Cart count badge (optional) */}
          {cartCount > 0 && (<span className="absolute -top-2 -right-2 bg-orange-500 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
            {cartCount}
          </span>)}
        </div>
      </Link>

      </div>
    </header>
  )
}
