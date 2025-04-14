import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

// Import Context and Data
import { ShopContext } from "../Context/ShopContext";
import { productsData } from "../data";

const ProductDetails = () => {
  const { addToCart } = useContext(ShopContext);
  const { id } = useParams();

  const [message, setMessage] = useState("");

  // Find the product by ID
  const product = productsData.find((product) => product.id === parseInt(id));

  // Handle add to cart and show message
  const handleAddToCart = () => {
    addToCart(product, id);
    setMessage("Item added to cart!");

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="py-10 px-4 sm:px-8 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Product Image */}
        <div className="flex-shrink-0 mb-6 lg:mb-0">
          <img src={product.image} alt={product.title} className="w-full max-w-[460px] h-auto" />
        </div>

        {/* Product Info */}
        <div className="pl-0 lg:pl-16 text-center lg:text-left">
          <h3 className="text-3xl font-bold">{product.title}</h3>
          <p className="text-2xl text-red-500 mt-3">${product.price}</p>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="mt-6 px-12 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
          >
            ADD TO CART
          </button>

          {message && (
            <div className="mt-4 flex items-center justify-between bg-blue-600 text-white px-6 py-3 rounded-xl shadow-xl transition-all transform scale-110 opacity-100 animate-toastAnimation">
              <span>{message}</span>
              <div
                onClick={() => setMessage("")}
                className="cursor-pointer text-lg text-white opacity-70 hover:opacity-100"
              >
                &times;
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
