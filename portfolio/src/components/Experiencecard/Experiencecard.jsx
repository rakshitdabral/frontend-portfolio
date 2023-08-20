import React from 'react'
import "../../assets/styles/Experiencecard.css"

function Experiencecard(props) {
  return (
    <>
        <div className='container experience-card'>
            <div className='container experience-card-logo'>
            <img src={props.image} alt={props.alt}/>
            </div>
            <div className='container experience-card-body'>
            <div className='container  header-card'>
            <h3>{props.title}</h3>
            </div>
            <div className='container  experience-card-description'>
                <ul>
                {
                
                    props.desc.length > 1 ? props.desc.map((desc, index) => (
                        <li key={index}>{desc}</li>   
                        )) : <li><p>{props.desc}</p></li>
                
                }
                </ul>
            </div>
        </div>
        <div className="container  experience-card-date">
                <p>{props.date}</p>
            </div>
        </div>
    </>
  )
}

export default Experiencecard