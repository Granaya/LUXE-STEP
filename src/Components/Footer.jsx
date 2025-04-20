import React from 'react';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="bg-black text-white pb-12">
      <div className="flex justify-between items-center px-8 py-6 border-b-2 border-gray-600">
        <div className="text-2xl font-bold">
          <h2>LUXE STEP</h2>
        </div>

        <div className="flex space-x-4">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/cal.grant_/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="text-xl cursor-pointer hover:text-gray-400" />
          </a>

          {/* Twitter (X) */}
          <a
            href="https://x.com/grant_lly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX className="text-xl cursor-pointer hover:text-gray-400" />
          </a>
        </div>
      </div>

      <div className="text-center py-4">
        <p>Copyright © LUXE STEP 2024. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
