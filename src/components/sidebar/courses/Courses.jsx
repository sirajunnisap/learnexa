

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// const variants = {
//   open: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
//   closed: {
//     transition: {
//       staggerChildren: 0.05,
//       staggerDirection: -1,
//     },
//   },
// };

// const itemVariants = {
//   open: {
//     y: 0,
//     opacity: 1,
//   },
//   closed: {
//     y: 50,
//     opacity: 0,
//   },
// };

// const subMenuVariants = {
//   open: {
//     y: 0,
//     opacity: 1,
//   },
//   closed: {
//     y: 10,
//     opacity: 0,
//   },
// };

// const Courses = () => {
//   const [showSubMenu, setShowSubMenu] = useState(false);

//   const items = [
//     { name: "HOMEPAGE", path: "/" },
//     { name: "FEATURES", path: "/features" },
//     // { name: "SERVICES", path: "SERVICES" },
   
//     { name: "TESTIMONIALS", path: "/testimonials" },
//     // { name: "TEACHERS", path: "TEACHERS" },
//     { name: "OUR METHOD", path: "/method" },
//     { name: "ABOUT", path: "/about" },
//     { name: "CONTACT", path: "/contact" },
//     {
//       name: "COURSES",
//       path: "#",
//       onClick: () => setShowSubMenu(!showSubMenu),
//       icon: true,
//     },
//   ];

//   const subMenuItems = [
//     { name: "ARABIC", path: "/arabic" },
//     { name: "ENGLISH", path: "/english" },
//     { name: "HINDI", path: "/hindi" },
//   ];

//   return (
//     <motion.div className="links" variants={variants}>
//       {items.map((item) => (
//         <React.Fragment key={item.name}>
//           <motion.div
//             variants={itemVariants}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={item.onClick}
//             className={item.icon ? "has-icon" : ""}
//           >
//             <Link to={item.path}>
//               {item.name}
//               {item.icon && <i className="fa-solid fa-chevron-down icon"></i>}
//             </Link>
//           </motion.div>
//           {item.name === "COURSES" && (
//             <AnimatePresence>
//               {showSubMenu && subMenuItems.map((subItem) => (
//                 <motion.div
//                   key={subItem.name}
//                   variants={subMenuVariants}
//                   initial="closed"
//                   animate="open"
//                   exit="closed"
//                   className="sub-menu-item"
//                 >
//                   <Link to={subItem.path}>
//                     {subItem.name}
//                   </Link>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           )}
//         </React.Fragment>
//       ))}
//     </motion.div>
//   );
// };

// export default Courses;
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
    { name: "FEATURES", path: "/features" },
    { name: "TESTIMONIALS", path: "/testimonials" },
    { name: "OUR METHOD", path: "/method" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    {
      name: "COURSES",
      path: "#",
      onClick: () => setShowSubMenu(!showSubMenu),
      icon: true,
    },
  ];

  const subMenuItems = [
    { name: "ARABIC", path: "/arabic" },
    { name: "ENGLISH", path: "/english" },
    { name: "HINDI", path: "/hindi" },
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <div key={item.name} style={{ position: 'relative' }}>
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
              {showSubMenu && (
  <motion.div
    className="sub-menu"
    style={{
      position: 'absolute',
      top: '100%', // Aligns the submenu right below the parent item
      left: 0,
      backgroundColor: 'transparent', // Set to transparent to remove any background
      zIndex: 1000,
      width: '100%', // Matches the width of the parent item
    }}
    initial="closed"
    animate="open"
    exit="closed"
    variants={subMenuVariants}
  >
    {subMenuItems.map((subItem) => (
      <motion.div
        key={subItem.name}
        className="sub-menu-item"
      >
        <Link to={subItem.path}>
          {subItem.name}
        </Link>
      </motion.div>
    ))}
  </motion.div>
)}

            </AnimatePresence>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default Courses;
