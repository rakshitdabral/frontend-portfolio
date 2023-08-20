import React from 'react'
import "../../assets/styles/Reviewcard.css"

function Reviewcard(props) {
  return (
    <>
      <div className='review-card-wrapper'>
        <div className='review-card-logo'>
          <img src={props.src} alt={props.alt} />
        </div>
        <div className='review-card-content'>
          <p>{props.rev}</p>
        </div>
        <div className='review-card-name'>
          <p>{props.name}</p>
        </div>
        <div className='review-card-position'>
          <p>{props.pos}</p>
        </div>
      </div>
    </>
  )
}

export default Reviewcard