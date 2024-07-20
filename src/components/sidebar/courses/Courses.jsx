import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Courses = () => {
  const items = [
    { name: "HOMEPAGE", path: "/" },
    { name: "FEATURES", path: "FEATURES" },
    { name: "SERVICES", path: "SERVICES" },
    { name: "COURSES", path: "COURSES" },
    { name: "TESTIMONIALS", path: "TESTIMONIALS" },
    { name: "TEACHERS", path: "TEACHERS" },
    { name: "OUR METHOD", path: "METHODS" },
    { name: "CONTACT", path: "CONTACT" },
    { name: "ABOUT", path: "ABOUT" },
    { name: "ARABIC", path: "/arabic" },
    { name: "ENGLISH", path: "/english" },
    { name: "HINDI", path: "/hindi" }
  ];

  return (
    <motion.div className="links" variants={variants}>
    {items.map((item) => (
      <motion.div
        key={item.name}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to={item.path}>
          {item.name}
        </Link>
      </motion.div>
    ))}
  </motion.div>
  );
};

export default Courses;