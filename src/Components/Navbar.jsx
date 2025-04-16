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
        className={`w-full sm:w-auto mt-4 sm:mt-0 ${menuOpen ? 'block' : 'hidden'} sm:flex sm:items-center sm:space-x-6`}
      >
        {/* Search Input */}
        <div className="relative flex items-center mb-4 sm:mb-0">
          <BiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search for products..."
            className="pl-12 pr-10 py-2 sm:py-3 w-full sm:w-[300px] rounded-full border-2 border-white bg-white focus:outline-none"
          />
        </div>

        {/* Grouped Icons between the Search and Cart */}
        <div className="flex items-center space-x-6">
          {/* Contact Icon */}
          <Link to="/contact" className="text-white hover:text-gray-200 transition duration-300">
            <FiPhoneCall className="text-2xl sm:text-3xl" />
          </Link>

          {/* About Us Icon */}
          <Link to="/about-us" className="text-white hover:text-gray-200 transition duration-300">
            <FiInfo className="text-2xl sm:text-3xl" />
          </Link>

          {/* Shop Icon (Links to Shop page) */}
          <Link to="/shop" className="relative">
            <FiShoppingBag className="text-2xl sm:text-3xl text-white hover:text-gray-200 transition duration-300" />
          </Link>

          {/* Cart Icon (Links to Cart page) */}
          <Link to="/cart" className="relative">
            <BiCartAdd className="text-2xl sm:text-3xl text-white hover:text-gray-200 transition duration-300" />
            {quantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                {quantity}
              </span>
            )}
          </Link>

          {/* User Icon */}
          <BiUser className="text-2xl sm:text-3xl text-white hover:text-gray-200 transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
