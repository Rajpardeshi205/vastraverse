import React from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart, AiOutlineDelete } from "react-icons/ai";

const CartItems = ({
  cartItems,
  updateQuantity,
  removeItem,
  toggleWishlist,
  updateSize,
  selectedSizes,
  getNumericPrice,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
      {cartItems.map((item, index) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-32 h-48 md:h-32 flex-shrink-0">
              <motion.img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleWishlist(item.id)}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                {item.isWishlisted ? (
                  <AiFillHeart className="w-4 h-4 text-red-500" />
                ) : (
                  <AiOutlineHeart className="w-4 h-4 text-gray-400" />
                )}
              </motion.button>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <div className="flex gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      {item.theme}
                    </span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <AiOutlineDelete className="w-5 h-5" />
                </motion.button>
              </div>

              {item.size && (
                <div className="space-y-2">
                  <span className="text-sm font-medium text-gray-700">
                    Size:
                  </span>
                  <div className="flex gap-2 flex-wrap">
                    {item.size.map((size) => (
                      <motion.button
                        key={size}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => updateSize(item.id, size)}
                        className={`px-3 py-1 text-sm border rounded-md transition-all duration-200 ${
                          (selectedSizes[item.id] || item.selectedSize) === size
                            ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm"
                            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                        }`}
                      >
                        {size}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-700">
                    Qty:
                  </span>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <motion.button
                      whileHover={{ backgroundColor: "rgb(243, 244, 246)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </motion.button>
                    <span className="px-4 py-2 border-x border-gray-300 min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    <motion.button
                      whileHover={{ backgroundColor: "rgb(243, 244, 246)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </motion.button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">
                    ₹
                    {(
                      getNumericPrice(item.price) * item.quantity
                    ).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">{item.price} each</p>
                </div>
              </div>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleWishlist(item.id)}
                  className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {item.isWishlisted
                    ? "Remove from Wishlist"
                    : "Move to Wishlist"}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CartItems;
