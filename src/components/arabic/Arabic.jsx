import Background from "../background/Background";
import Cards from "../contentLng/Cards";
import ContentLng from "../contentLng/ContentLng";
import Feature from "../contentLng/Feature";
// import Tutors from "../contentLng/Tutors";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./arabic.scss";
import Testimonials from '../testimonials/Testimonials';

const Arabic = () => {

  const  languageCnt = {
    title:"Achieve Fluency in Arabic with Learnexa Language Academy",
    firstpara: 
      "Unlock the full potential of Arabic with Learnexa Language Academy's comprehensive online classes! Mastering Arabic—whether speaking, reading, or writing—offers a significant advantage in today’s global communication landscape. With Arabic being a crucial language for millions, our goal is to support your success in every aspect of learning Arabic. Join us at Learnexa and embark on a journey to fluency in Arabic.",
    scdtitle:"Why Opt for Arabic Language Classes?",
    scdpara:"At Learnexa Language Academy, our Arabic language classes offer an excellent way to master speaking, reading, and writing in Arabic. Designed to efficiently develop fluency, these classes provide long-term benefits in communication and open new opportunities. Tailored for all levels, our courses ensure that each student can easily grasp the basics and progress to advanced skills. Whether you're a beginner or refining your proficiency, Learnexa offers a clear, structured path to mastering Arabic."
  }

  
  // Speak, Read, and Write Arabic with Ease: Comprehensive Learning Courses
  const cardCnt = 
    [
      {
      h:"Selected Sessions",
      p:"Our online Arabic classes offer carefully picked lessons that help you learn the language well. These lessons make it easier for you to understand and use Arabic like a native speaker. The course is a great way to improve your speaking, reading, and writing."
      },
      {
        h:"Supportive Learning Environment",
        p:"Our online Arabic class gives you a safe space to practice your language skills. This course helps you build confidence while you learn to speak, read, and write Arabic."
      },
      {
        h:"Instant Improvement",
        p:"This Arabic course helps you get better by practicing right away. We focus on fixing mistakes as soon as they happen, so you can quickly improve your speaking, reading, and writing skills."
      },
      {
        h:"Speak Like a Native",
        p:"This Arabic class helps you use the language like a native. By mastering speaking, reading, and writing, you will feel more confident using Arabic in your everyday life."
      },
    ]
  
    const tutorCnt = {
    tutor:[
      {
        image:"/tutor.png",
        name:"Sabith",
        descr:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sapiente autem esse eligendi fugiat, fuga tenetur nostrum. Quam blanditiis beatae natus perspiciatis tempore error cupiditate accusamus, ad debitis fugit."
      },
      {
        image:"/tutor.png",
        name:"Janna",
        descr:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sapiente autem esse eligendi fugiat, fuga tenetur nostrum. Quam blanditiis beatae natus perspiciatis tempore error cupiditate accusamus, ad debitis fugit."
      },
      {
        image:"/tutor.png",
        name:"Hana",
        descr:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sapiente autem esse eligendi fugiat, fuga tenetur nostrum. Quam blanditiis beatae natus perspiciatis tempore error cupiditate accusamus, ad debitis fugit."
      }
    ] ,

  };
  
  return (
    <>
    <Navbar/>

      <section className="arabic-section">
        <div className="background-wrapper">
          <div className="box">
            <Background language="arabic" />
          </div>
        </div>
        {/* <ContentLng content="arabic" /> */}
        <ContentLng content={languageCnt}/>
        
      </section>
      <section className="cards">

    <Feature/>

     <div className="cards">
     <Cards  content={cardCnt}/>
     </div>
     <Testimonials />

          {/* <Tutors content={tutorCnt}/> */}
        
      </section>
      <section>
         <Footer/>
      </section>
      
    </>
  );
};

export default Arabic;
