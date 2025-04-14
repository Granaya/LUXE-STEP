import React, { useContext } from "react";
import CartDetails from "../Cart/CartDetails";
import { FiTrash2 } from "react-icons/fi";

import { ShopContext } from "../../Context/ShopContext";

const Cart = () => {
  const { cart, clearCart, total, quantity } = useContext(ShopContext);

  return (
    <div className="flex flex-col lg:flex-row gap-5 p-4 lg:p-8">
      {/* Left - Cart Items */}
      <div className="w-full lg:w-2/3 bg-white p-4 rounded-xl shadow">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center font-bold">
          <h1 className="text-xl mb-2 sm:mb-0">Shopping Cart</h1>
          <div className="flex justify-between sm:justify-end items-center gap-4">
            <span className="text-gray-700">Items: {quantity}</span>
            <FiTrash2
              onClick={clearCart}
              className="text-xl text-red-500 cursor-pointer hover:text-red-600"
            />
          </div>
        </div>

        {/* Table headers - hidden on very small screens */}
        <div className="hidden md:flex justify-between mt-5 font-bold text-gray-600">
          <span className="w-1/2">Product Description</span>
          <span className="w-1/6 text-center">Quantity</span>
          <span className="w-1/6 text-center">Price</span>
          <span className="w-1/6 text-right">Total</span>
        </div>

        <div className="mt-5 space-y-4">
          {cart.length > 0 ? (
            cart.map((item) => <CartDetails item={item} key={item.id} />)
          ) : (
            <p className="text-center text-gray-500">Your cart is empty</p>
          )}
        </div>
      </div>

      {/* Right - Summary */}
      <div className="w-full lg:w-1/3 bg-gray-100 p-5 rounded-xl shadow h-fit">
        <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
        <div className="flex justify-between mb-3">
          <span>Items:</span>
          <span>{quantity}</span>
        </div>
        <div className="mb-5 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$ {isNaN(total) ? 0 : total}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-3">
            <span>Total Cost</span>
            <span>$ {isNaN(total) ? 0 : total}</span>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
