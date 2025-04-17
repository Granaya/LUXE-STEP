import React from 'react';

const User = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center px-4">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">User Profile</h1>
        <p className="text-gray-700">Welcome to your account area. Here you can view your orders, update details, and more.</p>
      </div>
    </div>
  );
};

export default User; // ✅ This line is necessary!
