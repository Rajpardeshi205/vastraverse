import React from "react";
import { motion } from "framer-motion";
import { BsCart3 } from "react-icons/bs";

const EmptyCart = ({ onContinueShopping }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <BsCart3 className="w-24 h-24 text-gray-400 mx-auto mb-6" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Your Cart is Empty
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-600 mb-8 text-lg"
        >
          Add some products to get started with your shopping!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContinueShopping}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Continue Shopping
          </motion.button>

          <div className="flex items-center justify-center gap-8 pt-6">
            <div className="text-center">
              <p className="text-lg font-bold text-gray-800">10K+</p>
              <p className="text-sm text-gray-600">Products</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gray-800">Free</p>
              <p className="text-sm text-gray-600">Shipping</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gray-800">30 Day</p>
              <p className="text-sm text-gray-600">Returns</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EmptyCart;
