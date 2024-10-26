import "./contentLng.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const ContentLng = ({ content }) => {
  return (
    <>
    <div className="ctnt">
      <div className="ctntwrapper">
        <motion.div
          className="ctnttextContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>{content.title}</motion.h2>

          <motion.p variants={textVariants}>{content.firstpara}</motion.p>
          
        </motion.div>
      </div>
    </div>
<div className="scndTitle">
            <motion.h3 className="scndTitleh" variants={textVariants}>{content.scdtitle}</motion.h3>

            <motion.p className="scndTitlep" variants={textVariants}>{content.scdpara}</motion.p>
          </div>
    </>
  );
};

export default ContentLng;

