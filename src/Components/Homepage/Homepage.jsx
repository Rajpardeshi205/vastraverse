import React from "react";
import { motion } from "framer-motion";
import Banner from "./Banner";
import NewArrivals from "./NewArrivals";
import ByFandom from "./ByFandom";
import Categories from "./Categories";

const Homepage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const bannerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: -30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="px-4 sm:px-6 lg:px-12 py-8 sm:py-10 md:py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-screen-xl mx-auto space-y-12">
        <motion.div
          variants={bannerVariants}
          whileInView={{
            scale: [1, 1.02, 1],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Banner />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.3 },
          }}
        >
          <NewArrivals />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.1 },
          }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.3 },
          }}
        >
          <ByFandom />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.2 },
          }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.3 },
          }}
        >
          <Categories />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Homepage;
