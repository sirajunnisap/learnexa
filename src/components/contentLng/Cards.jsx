import './contentLng.scss';

const Cards = ({content}) => {
  return (
<div>
   
        
    
    <div className='cards' >
    {content.map((item,index)=>(
      <div className="card" key={index}>
        <h2>{item.h}</h2>
        <p>{item.p}</p>
      </div>
       ))}
    </div>
   
    </div>
  )
}

export default Cards
