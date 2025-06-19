import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
const ProductGrid = ({ filteredItems }) => {
  const navigate = useNavigate();

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="w-full px-4 sm:px-6 py-6 overflow-y-auto"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.div
        className="text-xl sm:text-2xl font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        Items
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          key={filteredItems.length}
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="bg-gray-100 p-4 rounded shadow hover:shadow-md transition"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                layout
                layoutId={`item-${item.id}`}
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-66 object-contain rounded mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  className="space-y-1 text-left"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
                >
                  <motion.h2
                    className="text-base sm:text-lg font-semibold text-gray-800"
                    whileHover={{ color: "#4F46E5" }}
                  >
                    {item.name}
                  </motion.h2>
                  <div className="text-sm text-gray-600">
                    <span className="block">
                      Category:{" "}
                      <motion.span
                        className="text-blue-400"
                        whileHover={{ scale: 1.1 }}
                        style={{ display: "inline-block" }}
                      >
                        {item.category}
                      </motion.span>
                    </span>
                    <span className="block">
                      Theme:{" "}
                      <motion.span
                        className="text-green-700"
                        whileHover={{ scale: 1.1 }}
                        style={{ display: "inline-block" }}
                      >
                        {item.theme}
                      </motion.span>
                    </span>
                  </div>
                  <motion.p
                    className="text-base font-semibold text-red-600 mt-2"
                    whileHover={{
                      scale: 1.1,
                      color: "#DC2626",
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {item.price}
                  </motion.p>
                </motion.div>
              </motion.button>
            ))
          ) : (
            <motion.p
              className="text-gray-500 col-span-full text-center py-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              No items match your filters.
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductGrid;
