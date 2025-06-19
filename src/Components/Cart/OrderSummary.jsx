import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbTruck, TbShield, TbPercentage } from "react-icons/tb";

const OrderSummary = ({
  subtotal,
  onProceedToCheckout,
  onContinueShopping,
  getNumericPrice,
}) => {
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setPromoApplied(true);
    } else if (promoCode.toLowerCase() === "welcome15") {
      setPromoApplied(true);
    } else {
      alert("Invalid promo code. Try 'SAVE10' or 'WELCOME15'");
    }
  };

  const discount = promoApplied
    ? promoCode.toLowerCase() === "welcome15"
      ? Math.floor(subtotal * 0.15)
      : Math.floor(subtotal * 0.1)
    : 0;
  const shipping = subtotal > 1500 ? 0 : 99;
  const tax = Math.floor(subtotal * 0.18); // 18% GST
  const total = subtotal - discount + shipping + tax;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div variants={itemVariants} className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

        <div className="space-y-3 mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={applyPromoCode}
              disabled={promoApplied}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                promoApplied
                  ? "bg-green-100 text-green-700 cursor-not-allowed"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {promoApplied ? "Applied" : "Apply"}
            </motion.button>
          </div>

          {promoApplied && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-green-600 text-sm bg-green-50 p-2 rounded-lg"
            >
              <TbPercentage className="w-4 h-4" />
              <span>
                Promo code applied!{" "}
                {promoCode.toLowerCase() === "welcome15" ? "15%" : "10%"} off
              </span>
            </motion.div>
          )}

          <div className="text-xs text-gray-500">
            Try: <span className="font-medium">SAVE10</span> or{" "}
            <span className="font-medium">WELCOME15</span>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
          </div>

          {discount > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex justify-between text-green-600"
            >
              <span>Discount</span>
              <span>-₹{discount.toLocaleString()}</span>
            </motion.div>
          )}

          <div className="flex justify-between">
            <span className="text-gray-600">Tax (GST 18%)</span>
            <span className="font-semibold">₹{tax.toLocaleString()}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="font-semibold">
              {shipping === 0 ? (
                <span className="text-green-600">Free</span>
              ) : (
                `₹${shipping}`
              )}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-3">
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-blue-600">₹{total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <TbTruck className="w-5 h-5 text-blue-600" />
            <span>
              {shipping === 0
                ? "Free shipping on this order"
                : "Free shipping on orders over ₹1,500"}
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <TbShield className="w-5 h-5 text-green-600" />
            <span>Secure checkout guaranteed</span>
          </div>
        </div>

        <div className="space-y-3">
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onProceedToCheckout}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Proceed to Checkout
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContinueShopping}
            className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </motion.button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-200 mt-6">
          <div className="text-center">
            <p className="text-lg font-bold text-gray-800">10K+</p>
            <p className="text-xs text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-gray-800">4.8★</p>
            <p className="text-xs text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-gray-800">99%</p>
            <p className="text-xs text-gray-600">Satisfaction</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderSummary;
