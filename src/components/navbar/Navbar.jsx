// import "./navbar.scss";
// // import Sidebar from "../sidebar/Sidebar";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//         <div className="navwrapper">
//       <motion.span
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="title">LEARNEXA Academy</h1>
//       </motion.span>
//       <div className="links">
//         <a href="./home">Home</a>
//         <a href="./about">about</a>
//         <a href="./tutors">tutors</a>
//         <a href="./courses">courses</a>
//         <a href="./careers">careers</a>
//         <button className="contact">contact</button>
//       </div>
//       {/* <Sidebar /> */}
//       </div>
     
//     </div>
//   );
// };

// export default Navbar;
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navwrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="title">LEARNEXA Academy</h1>
        </motion.span>
        {!isMobile && (
          <div className="links">
            <a href="./home">Home</a>
            <a href="./about">About</a>
            <a href="./tutors">Tutors</a>
            <a href="./courses">Courses</a>
            <a href="./careers">Careers</a>
            <button className="contact">Contact</button>
          </div>
        )}
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
