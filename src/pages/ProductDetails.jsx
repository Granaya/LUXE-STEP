import React, { useContext } from "react";


import { useParams } from "react-router-dom";


import { ShopContext } from "../Context/ShopContext";


import { productsData } from "../data";

const ProductDetails = () => {
  const { addToCart } = useContext(ShopContext);


  const { id } = useParams();
  
  const product = productsData.find((product) => product.id === parseInt(id));

  return (
    <div className="py-10 px-4 sm:px-8 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        
        <div className="flex-shrink-0 mb-6 lg:mb-0">
          <img src={product.image} alt={product.title} className="w-full max-w-[460px] h-auto" />
        </div>

       
        <div className="pl-0 lg:pl-16 text-center lg:text-left">
          <h3 className="text-3xl font-bold">{product.title}</h3>
          <p className="text-2xl text-red-500 mt-3">${product.price}</p>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
          <button
            onClick={() => addToCart(product, id)}
            className="mt-6 px-12 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
