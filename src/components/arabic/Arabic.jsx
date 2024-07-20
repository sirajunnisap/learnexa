import Background from "../background/Background";
import Cards from "../contentLng/Cards";
import ContentLng from "../contentLng/ContentLng";
import Tutors from "../contentLng/Tutors";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./arabic.scss";

const Arabic = () => {

  const  languageCnt = {
    title:"Mastering the Language: The Best Online Learning Arabic Course For Effortless Education",
    firstpara: 
      "In today's interconnected world, mastering Arabic is a valuable skill that opens doors to cultural understanding and communication. If you're eager to embark on an enriching linguistic journey, look no further than LEARNEXA  Arabic subject tuition—your gateway to seamless language acquisition.",
    image:"/language.png"
  }

  
   
  const cardCnt = 
    [
      {
      h:"Arabic Unveiled",
      p:"Embarking on the quest to master Arabic begins with LEARNEXA Acadamey Arabic Tuition, a beacon of excellence in online language education. Tailored to cater to various proficiency levels, this platform makes the intricate Arabic language accessible to learners worldwide."
      },
      {
        h:"Arabic Unveiled",
        p:"Embarking on the quest to master Arabic begins with LEARNEXA Acadamey Arabic Tuition, a beacon of excellence in online language education. Tailored to cater to various proficiency levels, this platform makes the intricate Arabic language accessible to learners worldwide."
      },
      {
        h:"Arabic Unveiled",
        p:"Embarking on the quest to master Arabic begins with LEARNEXA Acadamey Arabic Tuition, a beacon of excellence in online language education. Tailored to cater to various proficiency levels, this platform makes the intricate Arabic language accessible to learners worldwide."
      },
      {
        h:"Arabic Unveiled",
        p:"Embarking on the quest to master Arabic begins with LEARNEXA Acadamey Arabic Tuition, a beacon of excellence in online language education. Tailored to cater to various proficiency levels, this platform makes the intricate Arabic language accessible to learners worldwide."
      },
    ]
  
    const tutorCnt = {
    tutor:[
      {
        image:"/tutor.png",
        name:"arabic teacher",
        descr:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sapiente autem esse eligendi fugiat, fuga tenetur nostrum. Quam blanditiis beatae natus perspiciatis tempore error cupiditate accusamus, ad debitis fugit."
      },
      {
        image:"/tutor.png",
        name:"arabic teacher",
        descr:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sint sapiente autem esse eligendi fugiat, fuga tenetur nostrum. Quam blanditiis beatae natus perspiciatis tempore error cupiditate accusamus, ad debitis fugit."
      },
      {
        image:"/tutor.png",
        name:"arabic teacher",
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
     <div className="cards">
     <Cards  content={cardCnt}/>
     </div>
         

          <Tutors content={tutorCnt}/>
        
      </section>
      <section>
         <Footer/>
      </section>
      
    </>
  );
};

export default Arabic;
