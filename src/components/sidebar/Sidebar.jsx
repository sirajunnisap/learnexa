// import { useState } from "react";
// import { motion } from "framer-motion";
// import ToggleButton from "./toggleButton/ToggleButton";
// import "./sidebar.scss"
// import Courses from "./courses/Courses";

// const variants = {
//     open: {
//       clipPath: "circle(1200px at calc(100% - 50px) 50px)",
//       transition: {
//         type: "spring",
//         stiffness: 20,
//       },
//     },
//     closed: {
//       clipPath: "circle(30px at calc(100% - 50px) 50px)",
//       transition: {
//         delay: 0.5,
//         type: "spring",
//         stiffness: 400,
//         damping: 40,
//       },
//     },
//   };
  

// const Sidebar = () => {
//     const [open, setOpen] = useState(false);
  
//     return (
//       <motion.div className="sidebar" animate={open ? "open" : "closed" }>
//         <motion.div className="bg" variants={variants}>
          
//         <Courses/>
//         </motion.div>
//         <ToggleButton setOpen={setOpen} />
//       </motion.div>
      
//     );
//   };

// export default Sidebar
import { useState, useEffect } from "react";
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

  if (size.width > 768) {
    return null; // Only render on mobile devices
  }

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Courses />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
