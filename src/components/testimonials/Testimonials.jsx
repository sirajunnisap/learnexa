
import "./testimonials.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";


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
                      I cannot express my gratitude enough towards Learnexa for the academic assistance they provided my child. The results have been exceptional, and my child &apos;s grades have improved significantly since beginning their online tuition with them. The teachers at Learnexa are highly experienced and incredibly supportive. They provided excellent guidance and personalized attention, which helped my child to gain confidence in their studies.
                      </p>
                      <div className="name">
                        <h4>ajith</h4>
                        <p>father</p>
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
                      My 10-year-old son, currently promoted to 6th standard, was very weak in the Hindi language. He was not able to properly read or write Hindi. After the 15 days of live class, he has shown a lot of improvement. Now he is able to read and write Hindi alphabets and words. Thank you, Sajna Ma&apos;am and Learnexa, for your support.


                      </p>
                      <div className="name">
                        <h4>asha</h4>
                        <p>mother</p>
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
                      Learnexa Academy is the best platform for learning English. I joined Learnexa Academy 2 months ago. They provide different experienced trainers for each activity. My trainer also helps me improve my communication skills, and she is very kind and friendly in nature. After I joined Learnexa Academy, it helped me improve my confidence level and language as well.


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

export default Testimonials;
