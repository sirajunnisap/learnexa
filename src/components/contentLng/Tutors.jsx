import './contentLng.scss';
import "./testimonials.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Tutors = ({content}) => {
  return (
    // <div>
    //   <h2>TUTORS</h2>
    //   <div className="tutors-cards">
    //   {
    //         content.tutor.map((item,index)=>(
              
           
    //     <div className="card" key={index}>
    //       <div className="image-tutor">
    //       <img src={item.image} alt="Tutor" />
    //       </div>

    //       <div className="about">
    //       <h3 className='about-name'>{item.name}</h3>
    //       <p className='about-tag'>Arabic Teacher</p>
    //           {/* <p className="about-descr">{item.descr}</p> */}
              
    //       </div>
    //     </div>  
    //      )) }
    //   </div>
    // </div>
    <div className="testi-section">
    <div className="site">
      <div className="container">
        <div className="testi">
          <div className="head">
            <h3 className="head-h3">what our students say</h3>
            <p className="head-p">Discover our students&apos; opinions on our online language course</p>
          </div>
          <div className="body">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide>
                <div className="testiwrapper">
                  <div className="thumbnail">
                    <img src="/hero.png" alt="Testimonial" />
                  </div>
                  <div className="aside">
                    <p>
                    Learnexa Language Academy is a very good English learning paltform.english house is a leaning platform that helped me to learn English
                    </p>
                    <div className="name">
                      <h4>ajith</h4>
                      <p>student</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testiwrapper">
                  <div className="thumbnail">
                    <img src="/tutor.png" alt="Testimonial" />
                  </div>
                  <div className="aside">
                    <p>
                    This is very amazing. I can study well. This platform is very helpful to increase our language skill. All staffs are very responsive. Through this course we can learn  language easily. We always get our coaches and I enjoy it

                    </p>
                    <div className="name">
                      <h4>asha</h4>
                      <p>student</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testiwrapper">
                  <div className="thumbnail2">
                    <img src="/tutor.png" alt="Testimonial" />
                  </div>
                  <div className="aside">
                    <p>
                    This institution called Learnexa is a good platform for all children who have difficulty in learning. A big thank you to Learnexa and Hana ma&apos;am for taking my son&apos;s class and making it a little better for my sons education. Thank you.
                    </p>
                    <div className="name">
                      <h4>Neha</h4>
                      <p>mother</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testiwrapper">
                  <div className="thumbnail">
                    <img src="/tutor.png" alt="Testimonial" />
                  </div>
                  <div className="aside">
                    <p>
                    Thank you for your lessons. my grammer and vocabulary have improved so much, and i think my pronunciation has as well.Thank you soo much and i like the class very much

                    </p>
                    <div className="name">
                      <h4>hana</h4>
                      <p>student</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testiwrapper">
                  <div className="thumbnail">
                    <img src="/hero.png" alt="Testimonial" />
                  </div>
                  <div className="aside">
                    <p>
                    My son has attended 15 days of online class and follow-up is over. My son did not know how to read and write the difficult words in English. But now things have changed. Your class has helped him, and thank you very much for your class. Thank you, Learnexa.
                    </p>
                    <div className="name">
                      <h4>shakira</h4>
                      <p>mother</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testiwrapper">
                  <div className="thumbnail">
                    <img src="/tutor.png" alt="Testimonial" />
                  </div>
                  <div className="aside">
                    <p>
                    I am happy to say Learnexa Academy is a very good platform for beginners because now I am confident in myself. So I suggest you to use Learnexa Academy for learning English. Thank you ❤️ Learnexa Academy.
                    </p>
                    <div className="name">
                      <h4>ameen</h4>
                      <p>student</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testiwrapper">
                  <div className="thumbnail">
                    <img src="/tutor.png" alt="Testimonial" />
                  </div>
                  <div className="aside">
                    <p>
                    Good experience and result. I am fully satisfied with classes and the results. I feel friendly classes and supportive trainers.

                    </p>
                    <div className="name">
                      <h4>bahja</h4>
                      <p>student</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
              <i className="fa-solid fa-chevron-left icon"></i>
                {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
              </div>
              <div className="swiper-button-next slider-arrow">
                <i className="fa-solid fa-chevron-right icon"></i>
                {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Tutors;