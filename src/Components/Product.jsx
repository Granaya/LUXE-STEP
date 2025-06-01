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

  // Titles for each row (you can customize them as needed)
  const rowTitles = [
    "Top Sold Sneakers",
    "New Arrivals",
    "Best Performance Sneakers",
  ];

  // Handle adding a product to the cart
  const handleAddToCart = (product, id) => {
    addToCart(product, id);
    setAddedProductId(id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 3000);
  };

  // Scroll Left Function
  const handleScrollLeft = (rowIndex) => {
    if (currentRowIndex[rowIndex] > 0) {
      const newRowIndex = [...currentRowIndex];
      newRowIndex[rowIndex] -= 4; // Move back by 4 products
      setCurrentRowIndex(newRowIndex);
    }
  };

  // Scroll Right Function
  const handleScrollRight = (rowIndex) => {
    const newRowIndex = [...currentRowIndex];
    const currentRowStartIndex = currentRowIndex[rowIndex];

    if (currentRowStartIndex + 4 < featuredProducts.length) {
      newRowIndex[rowIndex] = currentRowStartIndex + 4; // Move forward by 4 products
    } else {
      newRowIndex[rowIndex] = 0; // Reset to the first row when at the end
    }

    setCurrentRowIndex(newRowIndex);
  };

  return (
    <div className="bg-gradient-to-br from-[#e8f0ff] via-[#f7faff] to-[#e8f0ff] py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-8 lg:px-12">
      {/* Section Heading for Elite Collections */}
      <motion.div
        className="text-center mb-8 sm:mb-12 md:mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 tracking-wide px-2">
          <span className="text-blue-700">ELITE</span> COLLECTIONS
        </h1>
        <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg px-4">
          Discover sneakers crafted for comfort, built for performance, and designed to turn heads.
        </p>
      </motion.div>

      {/* Product Grid */}
      {Array.from({ length: Math.ceil(featuredProducts.length / 4) }).map((_, rowIndex) => {
        const rowStartIndex = currentRowIndex[rowIndex];
        const rowProducts = featuredProducts.slice(rowStartIndex, rowStartIndex + 4);

        return (
          <div key={rowIndex} className="relative mb-6 sm:mb-8">
            {/* Row Title */}
            <div
              className={`text-center mb-4 sm:mb-6 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl mx-2 sm:mx-0 ${
                rowIndex === 0
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500" // First row uses yellow-orange gradient
                  : rowIndex === 1
                  ? "bg-gradient-to-r from-green-500 to-teal-500"
                  : rowIndex === rowTitles.length - 1
                  ? "bg-gradient-to-r from-red-500 to-pink-500"
                  : rowIndex % 2 === 0
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                  : "bg-gradient-to-r from-indigo-500 to-blue-500"
              }`}
            >
              <motion.h2
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {rowTitles[rowIndex]}
              </motion.h2>
            </div>

            {/* Left Arrow */}
            {rowStartIndex > 0 && (
              <button
                onClick={() => handleScrollLeft(rowIndex)}
                className="absolute left-[-0.5rem] sm:left-[-1rem] md:left-[-1.5rem] top-[35%] sm:top-[40%] transform -translate-y-1/2 bg-white text-gray-700 p-1.5 sm:p-2 md:p-3 rounded-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl shadow-md hover:bg-gray-100 z-10"
              >
                <FaChevronLeft />
              </button>
            )}

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 px-2 sm:px-0">
              {rowProducts.map((product) => {
                const { id, image, title, price, description } = product;
                const truncatedDescription = description.slice(0, 50);

                return (
                  <motion.div
                    key={id}
                    className="relative group bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 w-full max-w-sm mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                      <img
                        src={image}
                        alt="product-img"
                        className="w-full h-40 sm:h-44 md:h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 bg-black/40 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <button
                          onClick={() => handleAddToCart(product, id)}
                          className="bg-red-500 text-white p-2 sm:p-3 md:p-4 rounded-full hover:bg-red-600 transition-colors duration-300"
                        >
                          <BiCartAdd className="text-lg sm:text-xl md:text-2xl" />
                        </button>
                        <Link to={`/product/${product.id}`}>
                          <button className="bg-white text-red-500 p-2 sm:p-3 md:p-4 rounded-full hover:bg-red-100 transition-colors duration-300">
                            <FaEye className="text-lg sm:text-xl md:text-2xl" />
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div className="mt-3 sm:mt-4 px-3 sm:px-4 pb-3 sm:pb-4">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 line-clamp-2">{title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-md mt-1 sm:mt-2 line-clamp-2">{truncatedDescription}...</p>

                      {/* Price + Add to Cart Icon */}
                      <div className="flex items-center justify-between mt-2 sm:mt-3">
                        <p className="text-red-500 text-lg sm:text-xl md:text-2xl font-bold">${price}</p>

                        {/* Cart Icon - Always visible on mobile, hidden on larger screens (handled by overlay) */}
                        <div className="sm:hidden">
                          <button
                            onClick={() => handleAddToCart(product, id)}
                            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
                            title="Add to Cart"
                          >
                            <BiCartAdd className="text-base" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {addedProductId === id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 bg-blue-100 text-blue-600 text-center py-2 px-3 text-xs sm:text-sm font-medium rounded-b-xl sm:rounded-b-2xl"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {title.length > 20 ? title.slice(0, 20) + '...' : title} added to cart!
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Right Arrow */}
            {rowProducts.length === 4 && (
              <button
                onClick={() => handleScrollRight(rowIndex)}
                className="absolute right-[-0.5rem] sm:right-[-1rem] md:right-[-1.5rem] top-[35%] sm:top-[40%] transform -translate-y-1/2 bg-white text-gray-700 p-1.5 sm:p-2 md:p-3 rounded-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl shadow-md hover:bg-gray-100 z-10"
              >
                <FaChevronRight />
              </button>
            )}
          </div>
        );
      })}

      {/* View More Button */}
      <div className="text-center mt-12 sm:mt-16 px-4">
        <Link
          to="/shop"
          className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-blue-700 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-blue-800 transition duration-300 w-full sm:w-auto max-w-xs sm:max-w-none"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Product;