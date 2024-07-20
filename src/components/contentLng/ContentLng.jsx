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
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const ContentLng = ({ content }) => {
  // const contents = {
  //   english: [
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ad pariatur quod officiis? Natus quia blanditiis, minima repudiandae accusantium perspiciatis! Deleniti repellat nemo enim laudantium maxime, velit sapiente similique mollitia.",
  //   ],
  //   arabic: [
  //     "In today's interconnected world, mastering Arabic is a valuable skill that opens doors to cultural understanding and communication. If you're eager to embark on an enriching linguistic journey, look no further than INTERVAL's Arabic subject tuition—your gateway to seamless language acquisition.",
  //   ],
  //   hindi: [
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ad pariatur quod officiis? Natus quia blanditiis, minima repudiandae accusantium perspiciatis! Deleniti repellat nemo enim laudantium maxime, velit sapiente similique mollitia.",
  //   ],
  // };

  // const lngcontents = contents[content] || [];
  return (
    <div className="ctnt">
      <div className="ctntwrapper">
        <motion.div
          className="ctnttextContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>{content.title}</motion.h2>

          {/* {lngcontents.map((item) => (
            <motion.p variants={textVariants} key={item}>
              {item}
            </motion.p>
          ))} */}
 
            <motion.p variants={textVariants} >
              {content.firstpara}
            </motion.p>
      
          {/* <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
                click me
              </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div> */}
          {/* <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          /> */}
        </motion.div>
      </div>
      {/* <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Learnexa Academy 
      </motion.div> */}
      <div className="ctntimageContainer">
        <img src={content.image} alt="" />
      </div>
    </div>
  );
};

export default ContentLng;
