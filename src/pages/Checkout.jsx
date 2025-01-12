import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-10 flex items-center justify-center px-4">
      <div className="max-w-md bg-white rounded-lg p-6 text-center">
        <FaCheckCircle className="text-black text-6xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order is being processed and will be
          shipped soon.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-black text-white py-2 px-4 rounded-md hover:scale-95 duration-300 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Checkout;
