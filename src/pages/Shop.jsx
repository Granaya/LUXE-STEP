import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";
import { BiCartAdd } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { productsData } from '../data';

const Shop = () => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 md:px-12">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
        EXPLORE THE LUXE COLLECTION
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all p-4 group"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => addToCart(product, product.id)}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-full hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 transition-colors duration-300"
                >
                  <BiCartAdd className="text-xl" />
                </button>
                <Link to={`/product/${product.id}`}>
                  <button className="bg-white text-red-500 p-3 rounded-full hover:bg-red-50 transition-all duration-300">
                    <FaEye className="text-xl" />
                  </button>
                </Link>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{product.title}</h3>
            <p className="text-red-500 font-bold text-xl mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
