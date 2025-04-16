import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { BiCartAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { featuredProducts } from '../data';

const Product = () => {
  const { addToCart } = useContext(ShopContext);
  const [addedProductId, setAddedProductId] = useState(null);

  const handleAddToCart = (product, id) => {
    addToCart(product, id);
    setAddedProductId(id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-br from-[#e8f0ff] via-[#f7faff] to-[#e8f0ff] py-16 px-4 sm:px-8 md:px-12">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-wide">
          <span className="text-blue-700">ELITE</span> COLLECTIONS
        </h1>
        <p className="text-gray-500 mt-3 text-lg">
          Discover sneakers crafted for comfort, built for performance, and designed to turn heads.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {featuredProducts.map((product, index) => {
          const { id, image, title, price } = product;
          return (
            <div
              key={id}
              className="relative group bg-white border border-gray-100 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt="product-img"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 sm:opacity-0 sm:group-hover:opacity-100 opacity-100 transition-opacity duration-500 ease-in-out">
                  <button
                    onClick={() => handleAddToCart(product, id)}
                    className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 transition-colors duration-300"
                  >
                    <BiCartAdd className="text-2xl" />
                  </button>
                  <Link to={`/product/${product.id}`}>
                    <button className="bg-white text-red-500 p-4 rounded-full hover:bg-red-100 transition-colors duration-300">
                      <FaEye className="text-2xl" />
                    </button>
                  </Link>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-red-500 text-xl sm:text-2xl font-bold mt-2">${price}</p>

                {addedProductId === id && (
                  <p className="mt-2 text-blue-600 bg-blue-100 rounded px-3 py-2 text-sm font-medium transition-opacity duration-500 ease-in-out animate-fade-in">
                    {title} added to cart!
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* View More Button */}
      <div className="text-center mt-16">
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-blue-700 text-white rounded-full font-semibold text-lg hover:bg-blue-800 transition duration-300"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Product;
