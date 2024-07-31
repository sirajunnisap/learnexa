import "./hero.scss";
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
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {

 
  return (
    
    <div className="hero">
      <div className="herowrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h3 className="hero-h3" variants={textVariants}><span>Learnexa</span>  Makes Language Learning Easy and Enjoyable.</motion.h3>
          <motion.p variants={textVariants} className="main-p">
           English learning with one-on-one mentorship, anytime and anywhere.
          </motion.p>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
            <a href="#"><i className="fa-brands fa-whatsapp    icon"></i></a>
             <p className="whatsapp">Whatsapp Now To Join</p>
            </motion.button>
            {/* <motion.button variants={textVariants}>Contact Me</motion.button> */}
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Learnexa Academy 
      </motion.div>
      <div className="heroimageContainer">
        <img src="/hero2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;