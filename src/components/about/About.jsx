import "./about.scss";

const About = () => {

  
  return (
    <div >
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
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2021</div>
            <div className="timeline-content">
              <h1>timeline info 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                pariatur tempore ab ipsa earum, esse maiores tenetur.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <h1>timeline info 2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                pariatur tempore ab ipsa earum, esse maiores tenetur.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <h1>timeline info 3</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                pariatur tempore ab ipsa earum, esse maiores tenetur.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h1>timeline info 4</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                pariatur tempore ab ipsa earum, esse maiores tenetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// const [selectedId, setSelectedId] = useState(null)

// {items.map(item => (
//   <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
//     <motion.h5>{item.subtitle}</motion.h5>
//     <motion.h2>{item.title}</motion.h2>
//   </motion.div>
// ))}

// <AnimatePresence>
//   {selectedId && (
//     <motion.div layoutId={selectedId}>
//       <motion.h5>{item.subtitle}</motion.h5>
//       <motion.h2>{item.title}</motion.h2>
//       <motion.button onClick={() => setSelectedId(null)} />
//     </motion.div>
//   )}
// </AnimatePresence>
