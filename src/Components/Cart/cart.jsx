import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";
import EmptyCart from "./EmptyCart";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";

const CartPage = ({
  cartItems = [],
  setCartItems,
  onContinueShopping,
  onProceedToCheckout,
}) => {
  const [selectedSizes, setSelectedSizes] = useState({});

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const toggleWishlist = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isWishlisted: !item.isWishlisted } : item
      )
    );
  };

  const updateSize = (id, size) => {
    setSelectedSizes((prev) => ({ ...prev, [id]: size }));
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, selectedSize: size } : item
      )
    );
  };

  const getNumericPrice = (priceString) => {
    return parseInt(priceString.replace("₹", "").replace(",", ""));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + getNumericPrice(item.price) * item.quantity,
    0
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (cartItems.length === 0) {
    return <EmptyCart onContinueShopping={onContinueShopping} />;
  }

  return (
    <div className="min-h-screen mt-14 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto p-6 md:p-12"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContinueShopping}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <BsArrowLeft className="w-6 h-6 text-gray-700" />
          </motion.button>
          <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
            {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <CartItems
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            toggleWishlist={toggleWishlist}
            updateSize={updateSize}
            selectedSizes={selectedSizes}
            getNumericPrice={getNumericPrice}
          />

          <OrderSummary
            subtotal={subtotal}
            onProceedToCheckout={onProceedToCheckout}
            onContinueShopping={onContinueShopping}
            getNumericPrice={getNumericPrice}
          />
        </div>

        <motion.div
          variants={itemVariants}
          className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg"
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div>
              <p className="text-lg font-bold text-gray-900">
                ₹{subtotal.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">{cartItems.length} items</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onProceedToCheckout}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg"
            >
              Checkout
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CartPage;
