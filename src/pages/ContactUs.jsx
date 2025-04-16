import React, { useState } from 'react';
import { BiPhone } from 'react-icons/bi';

const ContactUs = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message Sent:', { name, email, message });
  };

  return (
    <div className="bg-gradient-to-r from-[#e0f7ff] to-[#ffffff] py-20 px-4 sm:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-4">
          Contact Luxe Step
        </h2>
        <p className="text-center text-gray-500 mb-8">
          We're always happy to help. Drop us a message or call us directly!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none"
              placeholder="Kwesi Grant"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none"
              placeholder="grant@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Number */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm">Prefer to call?</p>
          <a
            href="tel:+0507338842"
            className="inline-flex items-center justify-center text-blue-600 text-lg font-semibold mt-2 hover:underline"
          >
            <BiPhone className="mr-2 text-xl" />
            0507338842
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
