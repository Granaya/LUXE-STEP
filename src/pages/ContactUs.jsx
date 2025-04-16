import React, { useState } from 'react';
import { BiPhone } from 'react-icons/bi';

const ContactUs = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Message Sent:', { name, email, message });
  };

  return (
    <div className="py-16 px-4 sm:px-8 bg-gray-100">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">CONTACT LUXE STEP</h2>
        <p className="text-center mb-8 text-gray-600">Got a question? We are here to help!</p>
        
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Send Message
          </button>
        </form>

        {/* Phone Number Section */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700">Call us directly:</p>
          <a
            href="tel:+0507338842"
            className="flex items-center justify-center text-blue-500 text-xl mt-2"
          >
            <BiPhone className="mr-2" />
            0507338842
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
