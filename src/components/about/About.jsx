// import "./about.scss";

// const About = () => {

  
//   return (
//     <div >
//       <div className="timeline-section">
//       <div className="wrapper">
//         <div className="box">
//           <p>a</p>
//           <p>B</p>
//           <p>c</p>
//           <p>D</p>
//           <p>e</p>
//           <p>f</p>
//           <p>G</p>
//           <p>h</p>
//           <p>I</p>
//           <p>j</p>
          
          
          
//         </div>
//       </div>
      
//         <div className="timeline-items">
//           <div className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-date">2021</div>
//             <div className="timeline-content">
//               <h1>timeline info 1</h1>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//                 pariatur tempore ab ipsa earum, esse maiores tenetur.
//               </p>
//             </div>
//           </div>

//           <div className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-date">2022</div>
//             <div className="timeline-content">
//               <h1>timeline info 2</h1>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//                 pariatur tempore ab ipsa earum, esse maiores tenetur.
//               </p>
//             </div>
//           </div>

//           <div className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-date">2023</div>
//             <div className="timeline-content">
//               <h1>timeline info 3</h1>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//                 pariatur tempore ab ipsa earum, esse maiores tenetur.
//               </p>
//             </div>
//           </div>

//           <div className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-date">2024</div>
//             <div className="timeline-content">
//               <h1>timeline info 4</h1>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//                 pariatur tempore ab ipsa earum, esse maiores tenetur.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// // const [selectedId, setSelectedId] = useState(null)

// // {items.map(item => (
// //   <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
// //     <motion.h5>{item.subtitle}</motion.h5>
// //     <motion.h2>{item.title}</motion.h2>
// //   </motion.div>
// // ))}

// // <AnimatePresence>
// //   {selectedId && (
// //     <motion.div layoutId={selectedId}>
// //       <motion.h5>{item.subtitle}</motion.h5>
// //       <motion.h2>{item.title}</motion.h2>
// //       <motion.button onClick={() => setSelectedId(null)} />
// //     </motion.div>
// //   )}
// // </AnimatePresence>
// import "./about.scss";
// import { motion } from "framer-motion";

// const textVariants1 = {
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

// const textVariants2 = {
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

// const About = () => {
//   return (
//     <div>
//       <div className="timeline-section">
//       <div className="wrapper">
//         <div className="box">
//           <p>a</p>
//           <p>B</p>
//           <p>c</p>
//           <p>D</p>
//           <p>e</p>
//           <p>f</p>
//           <p>G</p>
//           <p>h</p>
//           <p>I</p>
//           <p>j</p>
          
          
          
//         </div>
//       </div>
//         <div className="timeline-items">
//           <motion.div
//             className="timeline-item"
//             variants={textVariants1}
//             initial="hidden"
          
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }} 
//           >
//             <div className="timeline-dot"></div>
//             <div className="timeline-date">2021</div>
//             <div className="timeline-content">
//               <h1>timeline info 1</h1>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//                 pariatur tempore ab ipsa earum, esse maiores tenetur.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             className="timeline-item"
//             variants={textVariants1}
//             initial="hidden"
          
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }} 
//            >
//             <div className="timeline-dot"></div>
//             <div className="timeline-date">2022</div>
//             <div className="timeline-content">
//               <h1>timeline info 2</h1>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//                 pariatur tempore ab ipsa earum, esse maiores tenetur.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             className="timeline-item"
//             variants={textVariants1}
//             initial="hidden"
          
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }} 
//            >
//             <div className="timeline-dot"></div>
//             <div className="timeline-date">2023</div>
//             <div className="timeline-content">
//               <h1>timeline info 3</h1>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//                 pariatur tempore ab ipsa earum, esse maiores tenetur.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             className="timeline-item"
//             variants={textVariants1}
//             initial="hidden"
          
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }} 
          
//           >
//             <div className="timeline-dot"></div>
//             <div className="timeline-date">2024</div>
//             <div className="timeline-content">
//               <h1>timeline info 4</h1>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//                 pariatur tempore ab ipsa earum, esse maiores tenetur.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import "./about.scss";
import { motion } from "framer-motion";

// const textVariants1 = {
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

// const textVariants2 = {
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

const About = () => {
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
          <motion.div
            className="timeline-item"
            variants={textVariants1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-date">2021</div>
            <div className="timeline-content">
              <h1>timeline info 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                pariatur tempore ab ipsa earum, esse maiores tenetur.
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
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <h1>timeline info 2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                pariatur tempore ab ipsa earum, esse maiores tenetur.
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
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <h1>timeline info 3</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                pariatur tempore ab ipsa earum, esse maiores tenetur.
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
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h1>timeline info 4</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                pariatur tempore ab ipsa earum, esse maiores tenetur.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;