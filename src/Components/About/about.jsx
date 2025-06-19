import React from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiStar,
  FiUsers,
  FiAward,
  FiTruck,
} from "react-icons/fi";

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const products = [
    "Oversized T-Shirts",
    "All Bottoms",
    "Shirts",
    "Polos",
    "Caps",
    "Sneakers",
    "Slides & Clogs",
    "Jackets & More",
  ];

  const stats = [
    { icon: FiUsers, number: "50K+", label: "Happy Customers" },
    { icon: FiStar, number: "4.9", label: "Rating" },
    { icon: FiAward, number: "100+", label: "Premium Brands" },
    { icon: FiTruck, number: "24/7", label: "Fast Delivery" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <motion.div
          className="relative z-10 text-center max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            VastraVerse
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Discover the latest fashion trends and timeless classics.
            VastraVerse brings you premium quality clothing for every occasion,
            style, and personality.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <p className="font-semibold text-gray-800 text-sm md:text-base">
                  {product}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-200 rounded-full opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gray-300 rounded-full opacity-30"
            animate={{
              y: [0, 20, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-r from-gray-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeInUp}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Born from a passion for exceptional fashion, VastraVerse curates
              premium clothing that speaks to your individuality. We believe
              that great style should be accessible, comfortable, and authentic
              to who you are.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Premium Quality
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every piece in our collection is carefully selected for its
                quality, comfort, and style. From oversized tees to premium
                sneakers, we ensure each item meets our high standards.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                For Every Occasion
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you're dressing up for work, relaxing at home, or
                stepping out for an adventure, VastraVerse has the perfect
                pieces to complement your lifestyle.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 h-80"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <FiAward className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Premium Fashion
                  </h4>
                  <p className="text-gray-600 mt-2">Curated with care</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        className="py-20 px-6 bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-col items-center group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-white text-gray-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                <FiPhone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+91 1800-123-4567</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-white text-gray-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                <FiMail size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">support@vastraverse.com</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-white text-gray-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                <FiMapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">Mumbai, Maharashtra, India</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20"
            variants={scaleIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed">
              Join thousands of fashion enthusiasts who trust VastraVerse for
              their style needs. Experience premium quality, exceptional
              service, and fashion that speaks to your soul.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
