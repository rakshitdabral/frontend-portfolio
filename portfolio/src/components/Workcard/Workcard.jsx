import React, { useEffect, useState } from "react";
import "../../assets/styles/Workcard.css";

function Workcard(props) {

  const [isOdd, setOdd] = useState(true);
  
  useEffect(() => {
      if(props.serial%2==0){
        setOdd(false)
      }
  },[props])
  return (
    <>
      <div
        className={
          isOdd ? "work-card-wrapper" : "work-card-wrapper-rev"
        }
      >
        <div className="work-card-image">
        
          <img src={props.src} alt={props.alt} />
        </div>
        <div className="work-card-body">
          <div className="work-card-title">{props.title}</div>
          <div className="work-card-desc">{props.desc}</div>
          <div className="work-card-skills">
            {props.skills.map((skill) => (
              <button >{skill}</button>
            ))}
          </div>
          <div className="work-card-link">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Workcard;
