import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiHome,
  FiGrid,
  FiInfo,
} from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: FiHome },
    { name: "Categories", path: "/categories", icon: FiGrid },
    { name: "Cart", path: "/cart", icon: FiShoppingCart },
    { name: "About", path: "/about", icon: FiInfo },
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 120,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 md:h-12 md:w-12">
              <img
                src="./Images/logo.png"
                alt="logo"
                className="h-full w-full object-contain"
              />
            </div>
            <motion.h1
              className="text-xl md:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VastraVerse
            </motion.h1>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <Link key={item.name} to={item.path}>
                  <motion.div
                    custom={i}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all relative group"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiSearch className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClick}
            >
              <FaRegUser className="w-5 h-5" />
            </motion.button>
          </div>

          <motion.button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiX className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiMenu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                {navItems.map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <Link key={item.name} to={item.path}>
                      <motion.button
                        custom={i}
                        variants={mobileItemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ x: 5, backgroundColor: "#f8fafc" }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center space-x-3 w-full text-left px-3 py-3 text-gray-700 hover:text-blue-600 rounded-lg transition-all"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </motion.button>
                    </Link>
                  );
                })}

                <motion.div
                  className="flex justify-center space-x-6 px-3 py-4 border-t border-gray-200/50 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.button
                    className="p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiSearch className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    className="p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClick}
                  >
                    <FaRegUser className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
