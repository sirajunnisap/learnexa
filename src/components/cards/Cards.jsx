// import './cards.scss';

// const Cards = () => {
//   return (
//     <div className='cards-section'>
//         <div className="card-items">
//           <div className="card-item">
//             <div className="card-content">
//               <h1>card info 1</h1>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//                 pariatur tempore ab ipsa earum, esse maiores tenetur.
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//                 pariatur tempore ab ipsa earum, esse maiores tenetur.
              
//               </p>
//               <div className='card-image'>
//                 <img src="/hero2.jpg" alt="" />
//               </div>
//             </div>
//           </div>

//           <div className="card-item">
//             <div className="card-content">
//               <h1>card info 1</h1>
//               <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//                 pariatur tempore ab ipsa earum, esse maiores tenetur.
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//                 pariatur tempore ab ipsa earum, esse maiores tenetur.
//               </p>
//               <div className='card-image'>
//                 <img src="/hero2.jpg" alt="" />
//               </div>
//             </div>
//           </div>

//           <div className="card-item">
//           <div className="card-content">
//               <h1>card info 1</h1>
//               <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//                 pariatur tempore ab ipsa earum, esse maiores tenetur.
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//                 pariatur tempore ab ipsa earum, esse maiores tenetur.
//                </p>
//               <div className='card-image'>
//                 <img src="/hero2.jpg" alt="" />
//               </div>
//             </div>
//           </div>

//           <div className="card-item">
//            <div className="card-content">
//               <h1>card info 1</h1>
//               <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//                 pariatur tempore ab ipsa earum, esse maiores tenetur.
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//                 pariatur tempore ab ipsa earum, esse maiores tenetur.
//               </p>
//               <div className='card-image'>
//                 <img src="/hero2.jpg" alt="" />
//               </div>
//             </div>
//           </div>
//           </div>
//     </div>
//   )
// }

// export default Cards
import './cards.scss';
import { motion } from 'framer-motion';

const cardVariants = {
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

const Cards = () => {
  return (
    <div className='cards-section'>
      <div className="card-items">
        <motion.div
          className="card-item"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="card-content">
            <h1>card info 1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              pariatur tempore ab ipsa earum, esse maiores tenetur.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              pariatur tempore ab ipsa earum, esse maiores tenetur.
            </p>
            <div className='card-image'>
              <img src="/hero2.jpg" alt="" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="card-item"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="card-content">
            <h1>card info 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              pariatur tempore ab ipsa earum, esse maiores tenetur.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              pariatur tempore ab ipsa earum, esse maiores tenetur.
            </p>
            <div className='card-image'>
              <img src="/hero2.jpg" alt="" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="card-item"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="card-content">
            <h1>card info 3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              pariatur tempore ab ipsa earum, esse maiores tenetur.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              pariatur tempore ab ipsa earum, esse maiores tenetur.
            </p>
            <div className='card-image'>
              <img src="/hero2.jpg" alt="" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="card-item"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="card-content">
            <h1>card info 4</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              pariatur tempore ab ipsa earum, esse maiores tenetur.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              pariatur tempore ab ipsa earum, esse maiores tenetur.
            </p>
            <div className='card-image'>
              <img src="/hero2.jpg" alt="" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Cards;
