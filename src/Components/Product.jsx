import React, { useContext, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";
import { BiCartAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { featuredProducts } from "../data";
import { motion } from "framer-motion";

const Product = () => {
  const { addToCart } = useContext(ShopContext);
  const [addedProductId, setAddedProductId] = useState(null);
  const [currentRowIndex, setCurrentRowIndex] = useState([0, 4, 8, 12]);

  const rowTitles = [
    "Top Sold Sneakers",
    "New Arrivals",
    "Best Performance Sneakers",
  ];

  const handleAddToCart = (product, id) => {
    addToCart(product, id);
    setAddedProductId(id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 3000);
  };

  const handleScrollLeft = (rowIndex) => {
    if (currentRowIndex[rowIndex] > 0) {
      const newRowIndex = [...currentRowIndex];
      newRowIndex[rowIndex] -= 4;
      setCurrentRowIndex(newRowIndex);
    }
  };

  const handleScrollRight = (rowIndex) => {
    const newRowIndex = [...currentRowIndex];
    const currentRowStartIndex = currentRowIndex[rowIndex];
    if (currentRowStartIndex + 4 < featuredProducts.length) {
      newRowIndex[rowIndex] = currentRowStartIndex + 4;
    } else {
      newRowIndex[rowIndex] = 0;
    }
    setCurrentRowIndex(newRowIndex);
  };

  return (
    <div className="bg-gradient-to-br from-[#e8f0ff] via-[#f7faff] to-[#e8f0ff] py-12 px-4 sm:px-8 md:px-16">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-wide">
          <span className="text-blue-700">ELITE</span> COLLECTIONS
        </h1>
        <p className="text-gray-500 mt-3 text-lg">
          Discover sneakers crafted for comfort, built for performance, and designed to turn heads.
        </p>
      </motion.div>

      {Array.from({ length: Math.ceil(featuredProducts.length / 4) }).map((_, rowIndex) => {
        const rowStartIndex = currentRowIndex[rowIndex];
        const rowProducts = featuredProducts.slice(rowStartIndex, rowStartIndex + 4);

        return (
          <div key={rowIndex} className="relative mb-12">
            {/* Row Title */}
            <div
              className={`text-center mb-6 p-4 rounded-xl ${
                rowIndex === 0
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                  : rowIndex === 1
                  ? "bg-gradient-to-r from-green-500 to-teal-500"
                  : "bg-gradient-to-r from-red-500 to-pink-500"
              }`}
            >
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {rowTitles[rowIndex]}
              </motion.h2>
            </div>

            {/* Left Arrow (hidden on small screens) */}
            {rowStartIndex > 0 && (
              <button
                onClick={() => handleScrollLeft(rowIndex)}
                className="hidden sm:flex absolute left-[-1.5rem] top-[40%] transform -translate-y-1/2 bg-white text-gray-700 p-3 rounded-full text-4xl shadow-md hover:bg-gray-100 z-10"
              >
                <FaChevronLeft />
              </button>
            )}

            {/* Product Cards */}
            <div className="flex gap-4 overflow-x-auto sm:overflow-hidden pb-2">
              {rowProducts.map((product) => {
                const { id, image, title, price, description } = product;
                const truncatedDescription = description.slice(0, 60);

                return (
                  <motion.div
                    key={id}
                    className="relative group bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-[260px] sm:w-[300px] flex-shrink-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img
                        src={image}
                        alt="product-img"
                        className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 sm:opacity-0 sm:group-hover:opacity-100 opacity-100 transition-opacity duration-500">
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

                    <div className="mt-4 px-4 pb-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">{truncatedDescription}...</p>

                      <div className="flex items-center justify-between mt-2">
                        <p className="text-red-500 text-xl sm:text-2xl font-bold">${price}</p>
                        <button
                          onClick={() => handleAddToCart(product, id)}
                          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
                          title="Add to Cart"
                        >
                          <BiCartAdd className="text-base" />
                        </button>
                      </div>
                    </div>

                    {addedProductId === id && (
                      <motion.p
                        className="mt-2 text-blue-600 bg-blue-100 rounded px-3 py-2 text-sm font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                      >
                        {title} added to cart!
                      </motion.p>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Right Arrow (hidden on small screens) */}
            {rowProducts.length === 4 && (
              <button
                onClick={() => handleScrollRight(rowIndex)}
                className="hidden sm:flex absolute right-[-1.5rem] top-[40%] transform -translate-y-1/2 bg-white text-gray-700 p-3 rounded-full text-4xl shadow-md hover:bg-gray-100 z-10"
              >
                <FaChevronRight />
              </button>
            )}
          </div>
        );
      })}

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
