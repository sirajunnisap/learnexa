
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import ToggleButton from "./toggleButton/ToggleButton";
// import "./sidebar.scss";
// import Courses from "./courses/Courses";

// const variants = {
//   open: {
//     clipPath: "circle(1200px at calc(100% - 50px) 50px)",
//     transition: {
//       type: "spring",
//       stiffness: 20,
//     },
//   },
//   closed: {
//     clipPath: "circle(30px at calc(100% - 50px) 50px)",
//     transition: {
//       delay: 0.5,
//       type: "spring",
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

// const useWindowSize = () => {
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowSize;
// };

// const Sidebar = () => {
//   const [open, setOpen] = useState(false);
//   const [showSubMenu, setShowSubMenu] = useState(false);
//   const size = useWindowSize();

//   const toggleSubMenu = () => {
//     setShowSubMenu(!showSubMenu);
//   };

//   if (size.width > 768) {
//     return null; // Only render on mobile devices
//   }

//   return (
//     <motion.div className="sidebar" animate={open ? "open" : "closed"}>
//       <motion.div className="bg" variants={variants}>
//         <Courses showSubMenu={showSubMenu} toggleSubMenu={toggleSubMenu} />
//       </motion.div>
//       <ToggleButton setOpen={setOpen} />
//     </motion.div>
//   );
// };

// export default Sidebar;
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./toggleButton/ToggleButton";
import "./sidebar.scss";
import Courses from "./courses/Courses";

const variants = {
  open: {
    clipPath: "circle(1200px at calc(100% - 50px) 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at calc(100% - 50px) 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const size = useWindowSize();
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    // Check if the click is outside the sidebar
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the sidebar
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (size.width > 768) {
    return null; // Only render on mobile devices
  }

  return (
    <motion.div ref={sidebarRef} className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Courses />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
