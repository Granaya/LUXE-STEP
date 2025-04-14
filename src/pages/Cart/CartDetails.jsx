import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { ShopContext } from '../../Context/ShopContext';

const CartDetails = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(ShopContext);
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-5 border-b pb-4 gap-4">
      {/* Image + Info */}
      <div className="flex items-center gap-4">
        <img src={image} alt={title} className="w-20 h-20 object-cover rounded" />
        <div>
          <h3 className="font-semibold text-base sm:text-lg">
            <Link to={`/product/${id}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div
            className="text-red-500 text-sm cursor-pointer flex items-center mt-1"
            onClick={() => removeFromCart(id)}
          >
            <FiTrash2 className="mr-1" /> Remove
          </div>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center justify-between sm:justify-center gap-2">
        <button
          onClick={() => decreaseAmount(id)}
          className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center"
        >
          <IoMdRemove />
        </button>
        <span className="mx-2 font-medium">{amount}</span>
        <button
          onClick={() => increaseAmount(id)}
          className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center"
        >
          <IoMdAdd />
        </button>
      </div>

      {/* Prices */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-10 text-gray-700 text-sm sm:text-base">
        <p>Unit: ${price}</p>
        <p className="font-semibold">Total: ${parseFloat(price * amount).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartDetails;
