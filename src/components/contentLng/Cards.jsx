import './contentLng.scss';

const Cards = ({content}) => {
  return (
<div>
   
        
    
    <div className='cards' >
    {content.map((item,index)=>(
      <div className="card" key={index}>
        <h2  className="cardh">{item.h}</h2>
        <p className="cardp">{item.p}</p>
      </div>
       ))}
    </div>
   
    </div>
  )
}

export default Cards
