import React from 'react';
import './Card.scss';


function Card(props) {
  return (
    <div className='card-main'>
       <h3 className='card-head'>
       {props.cardhead}
       </h3>
      <p className='card-content'>
        {props.cardpara}
      </p>
    </div>
  )
}

export default Card
