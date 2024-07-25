

import React, { useEffect, useState } from 'react';
import './aboutUs.scss';
import { motion } from 'framer-motion';

// const textVariants = {
//   hidden: {
//     x: -500,
//     opacity: 0,
//   },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };
const textVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const imageVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
// const imageVariants = {
//   hidden: {
//     x: 500,
//     opacity: 0,
//   },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

const AboutUs = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <div className="methods">
       
      <div className="wrapper">
        <div className="box">
          <p>a</p>
          <p>B</p>
          <p>c</p>
          <p>D</p>
          <p>e</p>
          <p>f</p>
          <p>G</p>
          <p>h</p>
          <p>I</p>
          <p>j</p>
          
          
          
        </div>
      </div>
      <div className="methodwrapper" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="hidden"
          // animate="visible"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {/* <motion.h2 variants={textVariants} className='about-h2'>the learnexa way</motion.h2> */}
          <motion.h1 variants={textVariants} className='about-h1'>
            About Us
          </motion.h1>
          <motion.p variants={textVariants} className='about-p'>
          Learnexa was founded by passionate educators dedicated to transforming language education.
           As an online platform, we focus on overcoming your challenges with various languages by 
           providing creative and inspiring tools. Our personalized tutoring services cater to students
            of all ages and academic levels, offering ease of access and flexible schedules.
             This commitment has made us a trusted language training partner for thousands of learners worldwide.
              At Learnexa, we believe learning has no age limit. If you are willing to learn, we are here 
              to enhance your speaking, reading, and writing skills. Join us and experience the difference 
              in your language proficiency.
          </motion.p>
        </motion.div>
    
        <motion.div 
          className="methodimageContainer"
          variants={imageVariants}
          initial="hidden"
          // animate="visible"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {/* <motion.img 
            variants={imageVariants} 
            src="/methods.webp" 
            alt="Methods Image" 
          /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
