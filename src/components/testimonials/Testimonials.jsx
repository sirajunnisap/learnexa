

import './testimonials.scss';
// import 'swiper/swiper-bundle.min.css';

const Testimonials = () => {
  
  
  

  return (
    <div className="testi-section">
      <div className="site">
        <div className="container">
          <div className="testi">
            <div className="head">
              <h3>Testimonials</h3>
              <p>See what people are saying.</p>
            </div>
            <div className="body ">

             <ul className="">
             <li className="">
                  <div className="testiwrapper">
                    <div className="thumbnail">
                      <img src="/hero.png" alt="" />
                    </div>
                    <div className="aside">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel, voluptates natus nobis incidunt omnis ad at et
                        optio. Similique ducimus iste fuga aliquam in cum
                        corrupti possimus neque laborum eius.
                      </p>
                      <div className="name">
                        <h4>Neha</h4>
                        <p>Youtube Influencer</p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="testiwrapper">
                    <div className="thumbnail2">
                      <img src="/hero.png" alt="" />
                    </div>
                    <div className="aside">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel, voluptates natus nobis incidunt omnis ad at et
                        optio. Similique ducimus iste fuga aliquam in cum
                        corrupti possimus neque laborum eius.
                      </p>
                      <div className="name">
                        <h4>Neha</h4>
                        <p>Youtube Influencer</p>
                      </div>
                    </div>
                  </div> */}
                 </li>
              </ul>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
