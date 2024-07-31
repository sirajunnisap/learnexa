

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

const subMenuVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 10,
    opacity: 0,
  },
};

const Courses = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const items = [
    { name: "HOMEPAGE", path: "/" },
    { name: "FEATURES", path: "FEATURES" },
    { name: "SERVICES", path: "SERVICES" },
    {
      name: "COURSES",
      path: "#",
      onClick: () => setShowSubMenu(!showSubMenu),
      icon: true,
    },
    { name: "TESTIMONIALS", path: "TESTIMONIALS" },
    { name: "TEACHERS", path: "TEACHERS" },
    { name: "OUR METHOD", path: "METHODS" },
    { name: "CONTACT", path: "CONTACT" },
    { name: "ABOUT", path: "ABOUT" },
  ];

  const subMenuItems = [
    { name: "ARABIC", path: "/arabic" },
    { name: "ENGLISH", path: "/english" },
    { name: "HINDI", path: "/hindi" },
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <React.Fragment key={item.name}>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={item.onClick}
            className={item.icon ? "has-icon" : ""}
          >
            <Link to={item.path}>
              {item.name}
              {item.icon && <i className="fa-solid fa-chevron-down icon"></i>}
            </Link>
          </motion.div>
          {item.name === "COURSES" && (
            <AnimatePresence>
              {showSubMenu && subMenuItems.map((subItem) => (
                <motion.div
                  key={subItem.name}
                  variants={subMenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="sub-menu-item"
                >
                  <Link to={subItem.path}>
                    {subItem.name}
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default Courses;
