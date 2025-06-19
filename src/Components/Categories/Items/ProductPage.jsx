import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsCart3, BsStarFill } from "react-icons/bs";
import { TbTruck, TbShield, TbRefresh } from "react-icons/tb";
import products from "./products";

const ProductPage = () => {
  const { id } = useParams();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The product you're looking for doesn't exist.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Shop
          </motion.button>
        </div>
      </motion.div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen mt-14 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row items-start gap-12 p-6 md:p-12 max-w-7xl mx-auto"
      >
        <motion.div variants={imageVariants} className="w-full lg:w-1/2">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <motion.img
              src={product.image}
              alt={product.name}
              className="relative w-full h-auto object-contain rounded-2xl shadow-2xl bg-white p-8 border border-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              {isWishlisted ? (
                <AiFillHeart className="w-6 h-6 text-red-500" />
              ) : (
                <AiOutlineHeart className="w-6 h-6 text-gray-400" />
              )}
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full lg:w-1/2 space-y-6"
        >
          <div className="space-y-4">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                {product.category}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                {product.theme}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              {product.name}
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <BsStarFill key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">(4.8) • 247 reviews</span>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex items-baseline gap-4"
          >
            <span className="text-4xl font-bold text-red-600">
              {product.price}
            </span>
            <span className="text-xl text-gray-500 line-through">₹2600</span>
            <span className="px-2 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded">
              25% OFF
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg leading-relaxed"
          >
            Experience premium quality with this exceptional product. Crafted
            with attention to detail and designed for those who appreciate
            excellence in every aspect.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <TbTruck className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-800">Free Shipping</p>
                <p className="text-sm text-gray-600">2-3 business days</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <TbShield className="w-6 h-6 text-green-600" />
              <div>
                <p className="font-semibold text-gray-800">Warranty</p>
                <p className="text-sm text-gray-600">2 year coverage</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <TbRefresh className="w-6 h-6 text-purple-600" />
              <div>
                <p className="font-semibold text-gray-800">Returns</p>
                <p className="text-sm text-gray-600">30 day policy</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <span className="text-lg font-semibold text-gray-800">
              Quantity:
            </span>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="px-6 py-2 border-x border-gray-300">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-6"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(251, 191, 36, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-4 rounded-xl text-black font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <BsCart3 className="w-5 h-5" />
              Add to Cart
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Buy Now
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-8 pt-6 border-t border-gray-200"
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">10K+</p>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">4.8★</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">99%</p>
              <p className="text-sm text-gray-600">Satisfaction Rate</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductPage;
