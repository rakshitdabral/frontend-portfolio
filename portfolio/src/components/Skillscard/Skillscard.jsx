import React from 'react'
import "../../assets/styles/Skillcard.css"

function Skillscard(props) {
  return (
    <>
        <div className='skills-wrapper-2'>
            <div className='skills-card'>
                <img className="block-image" src={props.image} alt={props.alt} />
                <h3>{props.title}</h3>
            </div>
        
        </div>
    </>
  )
}

export default Skillscard