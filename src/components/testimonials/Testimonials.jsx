import "./testimonials.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

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
       <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
              <ul className="">
              <li className="">
     <SwiperSlide>
                   <div className="testiwrapper">
                     <div className="thumbnail">
                       {/* <img src="/hero.png" alt="" /> */}
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
     </SwiperSlide>
                   <div className="testiwrapper">
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
                   </div>
                  </li>
               </ul>
       <div className="slider-controler">
       <div className="swiper-button-prev slider-arrow">
         <ion-icon name="arrow-back-outline"></ion-icon>
       </div>
       <div className="swiper-button-next slider-arrow">
         <ion-icon name="arrow-forward-outline"></ion-icon>
       </div>
       <div className="swiper-pagination"></div>
     </div>
      </Swiper>
             </div>
           </div>
         </div>
       </div>

     </div>
    // <div className="container">
    //   <h1 className="heading">Flower Gallery</h1>
    //   <Swiper
    //     effect={"coverflow"}
    //     grabCursor={true}
    //     centeredSlides={true}
    //     loop={true}
    //     slidesPerView={"auto"}
    //     coverflowEffect={{
    //       rotate: 0,
    //       stretch: 0,
    //       depth: 100,
    //       modifier: 2.5,
    //     }}
    //     pagination={{ el: ".swiper-pagination", clickable: true }}
    //     navigation={{
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //       clickable: true,
    //     }}
    //     modules={[EffectCoverflow, Pagination, Navigation]}
    //     className="swiper_container"
    //   >
    //     <SwiperSlide>
    //       <img src="/hero2.jpg" alt="slide_image" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="/hero2.jpg" alt="slide_image" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="/hero2.jpg" alt="slide_image" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="/hero2.jpg" alt="slide_image" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="/hero2.jpg" alt="slide_image" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="/hero2.jpg" alt="slide_image" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="/hero2.jpg" alt="slide_image" />
    //     </SwiperSlide>

    //     <div className="slider-controler">
    //       <div className="swiper-button-prev slider-arrow">
    //         <ion-icon name="arrow-back-outline"></ion-icon>
    //       </div>
    //       <div className="swiper-button-next slider-arrow">
    //         <ion-icon name="arrow-forward-outline"></ion-icon>
    //       </div>
    //       <div className="swiper-pagination"></div>
    //     </div>
    //   </Swiper>
    // </div>
  );
};

export default Testimonials;
