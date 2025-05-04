import React, { useContext, useState } from 'react';
import { BiSearch, BiUser, BiMenu, BiCartAdd } from 'react-icons/bi';  // Import BiCartAdd
import { FiPhoneCall, FiInfo, FiShoppingBag } from 'react-icons/fi';  // Add FiShoppingBag import
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  const { searchProducts, quantity } = useContext(ShopContext);
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    searchProducts(e.target.value);
  };

  return (
    <div className="navbar bg-gradient-to-r from-[#0f0fd7] via-[#2c67f2] to-[#00d4ff] px-4 sm:px-8 md:px-14 py-4 flex items-center justify-between flex-wrap z-50 w-full">
      {/* Logo with Link to Home */}
      <Link to="/" className="text-white text-xl sm:text-2xl font-semibold">
        LUXE STEP
      </Link>

      {/* Mobile menu toggle button */}
      <button
        className="text-white text-3xl sm:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <BiMenu />
      </button>

      {/* Search + Icons */}
      <div
        className={`w-full sm:w-auto mt-4 sm:mt-0 ${menuOpen ? 'block' : 'hidden'} sm:flex sm:items-center sm:space-x-6 justify-center`}
      >
        {/* Search Input */}
        <div className="relative flex items-center mb-4 sm:mb-0 w-full sm:w-[400px] md:w-[500px]">
          <BiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-500" />
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search for products..."
            className="pl-12 pr-10 py-2 sm:py-3 w-full rounded-full border-2 border-white bg-white focus:outline-none"
          />
        </div>

        {/* Grouped Icons between the Search and Cart */}
        <div className="flex items-center space-x-6">
          {/* Contact Icon with Text */}
          <Link to="/contact" className="text-white hover:text-gray-200 transition duration-300 flex items-center space-x-2">
            <FiPhoneCall className="text-sm sm:text-base" />
            <span className="hidden sm:block text-sm">Contact</span>
          </Link>

          {/* About Us Icon with Text */}
          <Link to="/about-us" className="text-white hover:text-gray-200 transition duration-300 flex items-center space-x-2">
            <FiInfo className="text-sm sm:text-base" />
            <span className="hidden sm:block text-sm">About Us</span>
          </Link>

          {/* Shop Icon with Text */}
          <Link to="/shop" className="text-white hover:text-gray-200 transition duration-300 flex items-center space-x-2">
            <FiShoppingBag className="text-sm sm:text-base" />
            <span className="hidden sm:block text-sm">Shop</span>
          </Link>

          {/* Cart Icon with Quantity Badge on the Left */}
          <Link to="/cart" className="relative text-white hover:text-gray-200 transition duration-300 flex items-center space-x-2">
            {quantity > 0 && (
              <div className="absolute left-[-12px] -top-2 bg-red-500 text-white text-xs h-4 w-4 flex items-center justify-center rounded-full">
                {quantity}
              </div>
            )}
            <BiCartAdd className="text-sm sm:text-base" />
            <span className="hidden sm:block text-sm">Cart</span>
          </Link>

          {/* User Icon with Text */}
          <Link to="/user" className="text-white hover:text-gray-200 transition duration-300 flex items-center space-x-2">
            <BiUser className="text-sm sm:text-base" />
            <span className="hidden sm:block text-sm">Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
