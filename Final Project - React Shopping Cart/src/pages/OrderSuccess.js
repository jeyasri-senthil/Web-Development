import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-gray-700 font-semibold text-xl mb-2">
        Your order was successful!
      </h1>
      <p className="text-gray-600 mb-5">Thank you for your purchase. We will process your order soon.</p>
      <Link to="/">
        <button className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3">
          Return to Shop
        </button>
      </Link>
    </div>
  );
};

export default OrderSuccess;