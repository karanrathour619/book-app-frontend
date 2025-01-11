import React from "react";
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegHeart } from "react-icons/fa";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from '../../redux/features/cart/cartSlice.js';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product)); // Dispatch the addToWishlist action
  }

  return (
    <div className="rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
        {/* Book Image */}
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${book._id}`}>
            <img
              src={`${getImgUrl(book.coverImage)}`}
              alt="Book Cover"
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        {/* Book Details */}
        <div>
          <Link to={`/books/${book._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {book.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">{book.description.length > 80 ? `${book.description.slice(0, 80)}...` : book.description}</p>
          <p className="font-medium mb-5">
            ${book?.newPrice} <span className="line-through font-normal ml-2">${book?.oldPrice}</span>
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => handleAddToCart(book)}
              className="bg-primary rounded-md text-base font-secondary font-bold hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointer px-4 py-3
               space-x-1 flex items-center gap-1">
              <FiShoppingCart />
              <span>Add to Cart</span>
            </button>
            <button onClick={() => handleAddToWishlist(book)} className="bg-red-600 hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointer px-4 py-3 rounded-md">
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
