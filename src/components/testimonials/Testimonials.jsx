
// import Swiper from "swiper";
// import './testimonials.scss';
// import 'swiper/swiper-bundle.min.css';

// const Testimonials = () => {
  
  
//   const swiper = new Swiper('.swiper', {
//     autoHeight: true,
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
   
//   });

//   return (
//     <div className="testi-section">
//       <div className="site">
//         <div className="container">
//           <div className="testi">
//             <div className="head">
//               <h3>Testimonials</h3>
//               <p>See what people are saying.</p>
//             </div>
//             <div className="body swiper">

//              <ul className="swiper-wrapper">
//              <li className="swiper-slide">
//                   <div className="testiwrapper">
//                     <div className="thumbnail">
//                       <img src="/hero.png" alt="" />
//                     </div>
//                     <div className="aside">
//                       <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Vel, voluptates natus nobis incidunt omnis ad at et
//                         optio. Similique ducimus iste fuga aliquam in cum
//                         corrupti possimus neque laborum eius.
//                       </p>
//                       <div className="name">
//                         <h4>Neha</h4>
//                         <p>Youtube Influencer</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* <div className="testiwrapper">
//                     <div className="thumbnail2">
//                       <img src="/hero.png" alt="" />
//                     </div>
//                     <div className="aside">
//                       <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Vel, voluptates natus nobis incidunt omnis ad at et
//                         optio. Similique ducimus iste fuga aliquam in cum
//                         corrupti possimus neque laborum eius.
//                       </p>
//                       <div className="name">
//                         <h4>Neha</h4>
//                         <p>Youtube Influencer</p>
//                       </div>
//                     </div>
//                   </div> */}
//                  </li>
//               </ul>

//               <div className="swiper-pagination"></div>

//               <div className="swiper-button-prev"></div>
//               <div className="swiper-button-next"></div>
              
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
import React, { useEffect } from 'react';
import './testimonials.scss'; // Ensure your custom CSS/SCSS file is correctly named
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/swiper-bundle.min.css';

const Testimonials = () => {
  useEffect(() => {
    new Swiper('.swiper', {
      modules: [Pagination, Navigation],
      autoHeight: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className="testi-section">
      <div className="site">
        <div className="container">
          <div className="testi">
            <div className="head">
              <h3>Testimonials</h3>
              <p>See what people are saying.</p>
            </div>
            <div className="body swiper">
              <ul className="swiper-wrapper">
                <li className="swiper-slide">
                  <div className="testiwrapper">
                    <div className="thumbnail">
                      <img src="hero.png" alt="Thumbnail" />
                    </div>
                    <div className="aside">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, voluptates natus nobis incidunt omnis ad at et optio. Similique ducimus iste fuga aliquam in cum corrupti possimus neque laborum eius.</p>
                      <div className="name">
                        <h4>Neha</h4>
                        <p>YouTube Influencer</p>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Repeat similar structure for other testimonials */}
              </ul>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
