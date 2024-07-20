import Background from "../background/Background";
import Cards from "../contentLng/Cards";
import ContentLng from "../contentLng/ContentLng";
import Tutors from "../contentLng/Tutors";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import './hindi.scss';

const Hindi = () => {
  const  languageCnt = {
    title:"Mastering the Language: The Best Online Learning hind Course For Effortless Education",
    firstpara: 
      "In today's interconnected world, mastering hindi is a valuable skill that opens doors to cultural understanding and communication. If you're eager to embark on an enriching linguistic journey, look no further than LEARNEXA  hindi subject tuition—your gateway to seamless language acquisition.",
    image:"/language.png"
  }

  
   
  const cardCnt = 
    [
      {
      h:"Hindi Unveiled",
      p:"Embarking on the quest to master Hindi begins with LEARNEXA Acadamey Hindi Tuition, a beacon of excellence in online language education. Tailored to cater to various proficiency levels, this platform makes the intricate Hindi language accessible to learners worldwide."
      },
      {
        h:"Hindi Unveiled",
        p:"Embarking on the quest to master Hindi begins with LEARNEXA Acadamey Hindi Tuition, a beacon of excellence in online language education. Tailored to cater to various proficiency levels, this platform makes the intricate Hindi language accessible to learners worldwide."
      },
      {
        h:"Hindi Unveiled",
        p:"Embarking on the quest to master Hindi begins with LEARNEXA Acadamey Hindi Tuition, a beacon of excellence in online language education. Tailored to cater to various proficiency levels, this platform makes the intricate Hindi language accessible to learners worldwide."
      },
      {
        h:"Hindi Unveiled",
        p:"Embarking on the quest to master Hindi begins with LEARNEXA Acadamey Hindi Tuition, a beacon of excellence in online language education. Tailored to cater to various proficiency levels, this platform makes the intricate Hindi language accessible to learners worldwide."
      },
    ]
  
    const tutorCnt = {
    tutor:[
      {
        image:"/tutor.png",
        name:"Hindi teacher",
        descr:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sapiente autem esse eligendi fugiat, fuga tenetur nostrum. Quam blanditiis beatae natus perspiciatis tempore error cupiditate accusamus, ad debitis fugit."
      },
      {
        image:"/tutor.png",
        name:"Hindi teacher",
        descr:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sapiente autem esse eligendi fugiat, fuga tenetur nostrum. Quam blanditiis beatae natus perspiciatis tempore error cupiditate accusamus, ad debitis fugit."
      },
      {
        image:"/tutor.png",
        name:"Hindi teacher",
        descr:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sapiente autem esse eligendi fugiat, fuga tenetur nostrum. Quam blanditiis beatae natus perspiciatis tempore error cupiditate accusamus, ad debitis fugit."
      }
    ] ,

  };
  return (
    <>
    <Navbar/>
    <section className="hindi-section">
      <div className="background-wrapper">
        <div className="box">
          <Background language="hindi" />
        </div>
      </div>
      <ContentLng content={languageCnt}/>
        
      </section>
      <section className="cards">
     
          <Cards  content={cardCnt}/>
          
          <Tutors content={tutorCnt}/>
      </section>
    
      <section>
         <Footer/>
      </section>
  </>
  );
};

export default Hindi;
