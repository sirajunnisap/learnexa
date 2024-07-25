import "./features.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const Features = () => {
  return (
    <>
      {/* <motion.div */}
      {/* 
    <div

    className='features'
      variants={variants}
      initial="initial"
    >
      */}

      <div className="features">
        <ul>
          {/* < <motion.li variants={itemVariants}> 
            <span className="icon"><i className="fa-solid fa-user"></i></span>
            <span className="title">One to One Teaching</span>
          </motion.li> */}
          <li>
            <span className="icon">
              <i className="fa-solid fa-user"></i>
            </span>
            <span className="title">One to One Teaching</span>
          </li>
          <li>
            <span className="icon">
              <i className="fa-solid fa-book"></i>
            </span>
            <span className="title">Special Modules </span>
          </li>
          <li>
            <span className="icon">
              <i className="fa-solid fa-calendar"></i>
            </span>
            <span className="title"> Flexible Scheduling</span>
          </li>
          <li>
            <span className="icon">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className="title"> 100% Result</span>
          </li>
          <li>
            <span className="icon">
              <i className="fa-solid fa-user-friends"></i>
            </span>
            <span className="title">Individual Attention</span>
          </li>
          <li>
            <span className="icon">
              <i className="fa-solid fa-chart-line"></i>
            </span>
            <span className="title">Expert Assessments</span>
          </li>
          <li>
            <span className="icon">
              <i className="fa-solid fa-stopwatch"></i>
            </span>
            <span className="title">Result in 15 Days</span>
          </li>
          <li>
            <span className="icon">
              <i className="fa-solid fa-chart-bar"></i>
            </span>
            <span className="title">Progress Tracking</span>
          </li>
          <li>
            <span className="icon">
              <i className="fa-solid fa-book-reader"></i>
            </span>
            <span className="title">Reading and writing</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Features;
