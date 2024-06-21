// import './methods.scss';
// import { motion } from "framer-motion";

// const textVariants = {
//   initial: {
//     x: -500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const imageVariants = {
//   initial: {
//     x: 500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//     },
//   },
// };

// const Methods = () => {
//   return (
//     <div className="methods">
//       <div className="methodwrapper">
//         <motion.div
//           className="textContainer"
//           variants={textVariants}
//           initial="initial"
//           animate="animate"
//         >
//           <motion.h2 variants={textVariants}>the learnexa way</motion.h2>
//           <motion.h1 variants={textVariants}>
//             Our Method
//           </motion.h1>
//           <motion.p variants={textVariants}>
//             Providing personalized tutoring services to students will assist in effective 
//             learning and lively communication. Further, this will provide a route to 
//             individual attention and care your child need. Most of the children find 
//             it difficult to adjust with the inflexible timing at school. But here,
//             you are able to schedule the time according to your convenience. 
//             This helps the child to sit in class with undivided attention.
//             Extracurricular activities provides a channel for reinforcing the lessons
//             learned in class. These activities are part of a well-rounded education.
//           </motion.p>
//         </motion.div>
//       </div>
    
//       <motion.div 
//         className="methodimageContainer"
//         variants={imageVariants}
//         initial="initial"
//         animate="animate"
//       >
//         <motion.img 
//           variants={imageVariants} 
//           src="/methods.webp" 
//           alt="" 
//         />
//       </motion.div>
//     </div>
//   )
// }

// export default Methods;
// import './methods.scss';
// import { motion } from "framer-motion";

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
//     },
//   },
// };

// const Methods = () => {
//   return (
//     <div className="methods">
//       <div className="methodwrapper">
//         <motion.div
//            className="timeline-item"
//            variants={textVariants}
//            initial="hidden"
         
//            whileInView="visible"
//           //  viewport={{ once: true, amount: 0.3 }} 
//           >
//           <motion.h2 variants={textVariants}>the learnexa way</motion.h2>
//           <motion.h1 variants={textVariants}>
//             Our Method
//           </motion.h1>
//           <motion.p variants={textVariants}>
//             Providing personalized tutoring services to students will assist in effective 
//             learning and lively communication. Further, this will provide a route to 
//             individual attention and care your child need. Most of the children find 
//             it difficult to adjust with the inflexible timing at school. But here,
//             you are able to schedule the time according to your convenience. 
//             This helps the child to sit in class with undivided attention.
//             Extracurricular activities provides a channel for reinforcing the lessons
//             learned in class. These activities are part of a well-rounded education.
//           </motion.p>
//         </motion.div>
//       </div>
    
//       <motion.div 
//         className="methodimageContainer"
//         variants={imageVariants}
//         initial="hidden"
//         whileInView="visible"
//         // viewport={{ once: true, amount: 0.3 }} 
//       >
//         <motion.img 
//           variants={imageVariants} 
//           src="/methods.webp" 
//           alt="Methods Image" 
//         />
//       </motion.div>
//     </div>
//   )
// }

// export default Methods;
// import './methods.scss';
// import { motion } from "framer-motion";

// const textVariants = {
//   hidden: {
//     x: -500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const imageVariants = {
//   hidden: {
//     x: 500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const Methods = () => {
//   return (
//     <div className="methods">
//       <div className="methodwrapper">
//       <motion.div
//           className="textContainer"
//           variants={textVariants}
//           initial="hidden"
//           whileInView="animate"
//           // viewport={{ once: false, amount: 0.1 }} // Reduce the viewport amount for better mobile visibility
//         >
//           <motion.h2 variants={textVariants}>the learnexa way</motion.h2>
//           <motion.h1 variants={textVariants}>
//             Our Method
//           </motion.h1>
//           <motion.p variants={textVariants}>
//             Providing personalized tutoring services to students will assist in effective 
//             learning and lively communication. Further, this will provide a route to 
//             individual attention and care your child need. Most of the children find 
//             it difficult to adjust with the inflexible timing at school. But here,
//             you are able to schedule the time according to your convenience. 
//             This helps the child to sit in class with undivided attention.
//             Extracurricular activities provides a channel for reinforcing the lessons
//             learned in class. These activities are part of a well-rounded education.
//           </motion.p>
//         </motion.div>
//       </div>
    
//       <motion.div 
//         className="methodimageContainer"
//         variants={imageVariants}
//         initial="hidden"
//         whileInView="animate"
//         // viewport={{ once: false, amount: 0.1 }} // Reduce the viewport amount for better mobile visibility
//       >
//         <motion.img 
//           variants={imageVariants} 
//           src="/methods.webp" 
//           alt="Methods Image" 
//         />
//       </motion.div>
//     </div>
//   )
// }

// export default Methods;

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
          <motion.h2 variants={textVariants}>the learnexa way</motion.h2>
          <motion.h1 variants={textVariants}>
            Our Method
          </motion.h1>
          <motion.p variants={textVariants}>
            Providing personalized tutoring services to students will assist in effective 
            learning and lively communication. Further, this will provide a route to 
            individual attention and care your child need. Most of the children find 
            it difficult to adjust with the inflexible timing at school. But here,
            you are able to schedule the time according to your convenience. 
            This helps the child to sit in class with undivided attention.
            Extracurricular activities provides a channel for reinforcing the lessons
            learned in class. These activities are part of a well-rounded education.
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
          <motion.img 
            variants={imageVariants} 
            src="/methods.webp" 
            alt="Methods Image" 
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Methods;
