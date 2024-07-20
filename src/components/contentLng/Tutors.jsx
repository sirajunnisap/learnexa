import './contentLng.scss';

const Tutors = ({content}) => {
  return (
    <div>
      <h2>TUTORS</h2>
      <div className="tutors-cards">
      {
            content.tutor.map((item,index)=>(
              
           
        <div className="card" key={index}>
          <img src={item.image} alt="Tutor" />
          <div className="about">
          <h3 className='about-name'>{item.name}</h3>
          <p className='about-tag'>Tutor</p>
              <p className="about-descr">{item.descr}</p>
              
          </div>
        </div>  
         )) }
      </div>
    </div>
  );
};

export default Tutors;