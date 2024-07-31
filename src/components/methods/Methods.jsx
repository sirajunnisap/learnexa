

import React, { useEffect, useState } from 'react';
import './methods.scss';
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

const Methods = () => {
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
      <div className="methodwrapper" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="hidden"
          // animate="visible"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <motion.h2 variants={textVariants}>The <span>learnexa</span> Way</motion.h2>
          <motion.h1 variants={textVariants}>
            Our Method
          </motion.h1>
          <motion.p variants={textVariants}>
            {/* Providing personalized tutoring services to students will assist in effective 
            learning and lively communication. Further, this will provide a route to 
            individual attention and care your child need. Most of the children find 
            it difficult to adjust with the inflexible timing at school. But here,
            you are able to schedule the time according to your convenience. 
            This helps the child to sit in class with undivided attention.
            Extracurricular activities provides a channel for reinforcing the lessons
            learned in class. These activities are part of a well-rounded education. */}
            Providing personalized tutoring services to students assists in effective learning 
            and lively communication. This approach ensures individual attention and care for
             your child. Most children find it difficult to adjust to inflexible school timings,
              but here, you can schedule sessions at your convenience. We focus on developing 
              strong writing and reading skills, ensuring students learn to speak, read, and
               write proficiently. Extracurricular activities reinforce lessons learned in class 
               and are part of a well-rounded education. These activities enhance both academic 
               and personal growth. At Learnexa Academy, our comprehensive language programs cater 
               to all aspects of language learning, providing a thorough and engaging education for 
               your child.
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

export default Methods;
