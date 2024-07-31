


import "./why.scss";
import { motion } from "framer-motion";



const textVariants1 = {
  hidden: {
    y:20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const textVariants2 = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Why = () => {
  return (
    <div>
      <div className="timeline-section">
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
        <div className="timeline-items">

          <h3 className="head">How our courses help you grow.</h3>
          <motion.div
            className="timeline-item"
            variants={textVariants1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="timeline-dot"></div>
            {/* /<div className="timeline-date">2021</div> */}
            <div className="timeline-content">
          
            <p>
             PERSONAL TUTORS to coach you into excellence! 
            </p>
            </div>
          </motion.div>

          <motion.div
            className="timeline-item"
            variants={textVariants2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="timeline-dot"></div>
            {/* <div className="timeline-date">2022</div> */}
            <div className="timeline-content">
          
             
              <p>
              Calling Activities and Practical Sessions
            </p>
            </div>
          </motion.div>

          <motion.div
            className="timeline-item"
            variants={textVariants1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="timeline-dot"></div>
            {/* <div className="timeline-date">2023</div> */}
            <div className="timeline-content">
            <p>
            Flexible Learning Hours and 9 AM to 11 PM Tutor Availability on WhatsApp.
            </p>
              </div>
          </motion.div>

          <motion.div
            className="timeline-item"
            variants={textVariants2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="timeline-dot"></div>
            {/* <div className="timeline-date">2024</div> */}
            <div className="timeline-content">
            <p>
            Reading and writing taught with personalized support. </p>
           
            
               </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Why;