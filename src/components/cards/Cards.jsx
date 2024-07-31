
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
        <div className='head-content'>
        <h3>Individual online lessons to help you do your best.</h3>
        <h5>Personalized online education is more than a bunch of classes and boring instructions; it makes learning easy to reach. At Learnexa, we aim to give each child the best education suited for them.</h5>
        <p>At Learnexa, we provide:</p>
        </div>
        <motion.div
          className="card-item"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="card-content">
          <div className="dot"></div>
          <div className="content">
            <h1> Personalized Plans</h1>
            <p>
            We curate plans for your child that rightfully serve outcomes unique to their need. Each child&apos;s learning journey is curated by experts who know how learning can be made better.</p>
            </div>
            {/* <div className='card-image'>
              <img src="/hero2.jpg" alt="" />
            </div> */}
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
          <div className="dot"></div>
          <div className="content">
            <h1> Anytime tutor support</h1>
            <p>
              Our tutors are available for your child to help with any kind of confusion doubts and even exam-related anxiety to help your child lead with confidence. </p>
              </div>
            {/* <div className='card-image'>
              <img src="/hero2.jpg" alt="" />
            </div> */}
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
          <div className="dot"></div>
          <div className="content">
          <h1> Weak area focus</h1>
              <p>
             
              We provide special care to address the weak points from the get-go, from the first session till the last our first priority will be to provide satisfaction in conquering the child&apos;s weak areas. </p>
              </div>
            {/* <div className='card-image'>
              <img src="/hero2.jpg" alt="" />
            </div> */}
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
          <div className="dot"></div>
          <div className="content">
          <h1>  Student monitoring</h1>
              <p>
              each student is monitored with every little detail after each session gathering secure and complete data that allows us to inform you on your child&apos;s progress and the necessary next steps to take. pariatur tempore ab ipsa earum, esse maiores tenetur.
              </p>
              </div>
             {/* <div className='card-image'>
              <img src="/hero2.jpg" alt="" />
            </div> */}
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
          <div className="dot"></div>
          <div className="content">
          <h1> Audio-driven </h1>
              <p>
              Immerse yourself in English learning with our audio-driven spoken English classes online. Learn better with audio-based lessons to understand language deeply and speak like a pro. </p>
              </div>
             {/* <div className='card-image'>
              <img src="/hero2.jpg" alt="" />
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Cards;
