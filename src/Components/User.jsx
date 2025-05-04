import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaHeart,
  FaHistory,
  FaUserCircle,
  FaCreditCard,
  FaSignOutAlt,
  FaCog,
  FaBell,
  FaAddressBook,
} from 'react-icons/fa';

const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate logged-out state initially
  const navigate = useNavigate();

  const user = {
    name: "Grant",
    email: "grant@example.com",
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Update the state to logged out
    navigate('/login'); // Redirect to login page after logout
  };

  const handleRedirectToLogin = () => {
    navigate('/login'); // Redirect to login page if not logged in
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8 md:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* User Info */}
        {isLoggedIn ? (
          <div className="flex items-center gap-4 mb-6 border-b pb-4">
            <FaUserCircle className="text-5xl text-blue-600" />
            <div>
              <h2 className="text-2xl font-bold">Welcome back, {user.name}!</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-2">You're not signed in</h2>
            <p className="text-gray-600 mb-6">
              Please log in to view your account, orders, and wishlist.
            </p>
            <Link
              to="/login"
              className="inline-block px-6 py-3 bg-blue-700 text-white rounded-full font-semibold text-lg hover:bg-blue-800 transition duration-300"
            >
              Sign In
            </Link>
          </div>
        )}

        {/* Account Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Wishlist Section */}
          <div
            onClick={isLoggedIn ? null : handleRedirectToLogin} // Redirect if not logged in
            className={`bg-gradient-to-r from-pink-500 to-red-400 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer ${!isLoggedIn && 'opacity-50'}`}
          >
            <div className="flex items-center gap-4">
              <FaHeart className="text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Wishlist</h3>
                <p className="text-sm">View your saved sneakers</p>
              </div>
            </div>
          </div>

          {/* Order History Section */}
          <div
            onClick={isLoggedIn ? null : handleRedirectToLogin} // Redirect if not logged in
            className={`bg-gradient-to-r from-blue-500 to-indigo-400 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer ${!isLoggedIn && 'opacity-50'}`}
          >
            <div className="flex items-center gap-4">
              <FaHistory className="text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Order History</h3>
                <p className="text-sm">Track your past purchases</p>
              </div>
            </div>
          </div>

          {/* Payment Methods Section */}
          <div
            onClick={isLoggedIn ? null : handleRedirectToLogin} // Redirect if not logged in
            className={`bg-gradient-to-r from-green-500 to-emerald-400 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer ${!isLoggedIn && 'opacity-50'}`}
          >
            <div className="flex items-center gap-4">
              <FaCreditCard className="text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Payment Options</h3>
                <p className="text-sm">Manage your saved cards & checkout options</p>
              </div>
            </div>
          </div>

          {/* Profile Settings Section */}
          <div
            onClick={isLoggedIn ? null : handleRedirectToLogin} // Redirect if not logged in
            className={`bg-gradient-to-r from-yellow-500 to-orange-400 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer ${!isLoggedIn && 'opacity-50'}`}
          >
            <div className="flex items-center gap-4">
              <FaCog className="text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Profile Settings</h3>
                <p className="text-sm">Update your profile details</p>
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div
            onClick={isLoggedIn ? null : handleRedirectToLogin} // Redirect if not logged in
            className={`bg-gradient-to-r from-teal-500 to-lime-400 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer ${!isLoggedIn && 'opacity-50'}`}
          >
            <div className="flex items-center gap-4">
              <FaBell className="text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Notifications</h3>
                <p className="text-sm">Check your account updates</p>
              </div>
            </div>
          </div>

          {/* Saved Addresses Section */}
          <div
            onClick={isLoggedIn ? null : handleRedirectToLogin} // Redirect if not logged in
            className={`bg-gradient-to-r from-purple-500 to-pink-400 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer ${!isLoggedIn && 'opacity-50'}`}
          >
            <div className="flex items-center gap-4">
              <FaAddressBook className="text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Saved Addresses</h3>
                <p className="text-sm">Manage your shipping addresses</p>
              </div>
            </div>
          </div>

          {/* Log Out Button */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-gray-500 to-gray-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition flex items-center gap-4 w-full"
            >
              <FaSignOutAlt className="text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Log Out</h3>
                <p className="text-sm">Sign out from your account</p>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
