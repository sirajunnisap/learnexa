import "./navbar.scss";
// import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
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
      <div className="links">
        <a href="./home">Home</a>
        <a href="./about">about</a>
        <a href="./tutors">tutors</a>
        <a href="./courses">courses</a>
        <a href="./careers">careers</a>
        <button className="contact">contact</button>
      </div>
      {/* <Sidebar /> */}
      </div>
     
    </div>
  );
};

export default Navbar;
