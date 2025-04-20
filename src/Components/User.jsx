import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaHistory, FaUserCircle } from 'react-icons/fa';

const User = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-4 mb-6">
          <FaUserCircle className="text-5xl text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold">Welcome back, User!</h2>
            <p className="text-gray-600">Manage your profile, wishlist, and orders</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="bg-gradient-to-r from-pink-500 to-red-400 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <div className="flex items-center gap-4">
              <FaHeart className="text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Wishlist</h3>
                <p className="text-sm">View your saved sneakers</p>
              </div>
            </div>
          </Link>

          {/* Order History */}
          <Link
            to="/order-history"
            className="bg-gradient-to-r from-blue-500 to-indigo-400 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <div className="flex items-center gap-4">
              <FaHistory className="text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Order History</h3>
                <p className="text-sm">Track your past purchases</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
