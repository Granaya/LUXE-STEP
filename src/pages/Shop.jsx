import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";
import { BiCartAdd } from "react-icons/bi";
import { FaEye, FaCheckCircle } from "react-icons/fa";

const Shop = () => {
  const { addToCart, filteredProducts } = useContext(ShopContext); // Use filteredProducts from context
  const [addedProductId, setAddedProductId] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product, product.id);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1500); // Hide message after 1.5s
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 md:px-12">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
        EXPLORE THE LUXE COLLECTION
      </h1>

      {/* If no products match the search */}
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 text-lg font-medium">
          No products found. Try a different search.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all p-4 group relative"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-full hover:from-red-600 hover:to-red-700 transition-colors duration-300"
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

              {/* Success Message */}
              {addedProductId === product.id && (
                <div className="mt-3 flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded-lg shadow-sm transition-all duration-300">
                  <FaCheckCircle className="text-green-600" />
                  <span className="text-sm font-medium">Added to cart!</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
