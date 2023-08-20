import React from "react";
import "../../assets/styles/Experience.css";
import Experiencecard from "../../components/Experiencecard/Experiencecard";
import Experiencelist from "../../constants/Experienceslist";

function Experience() {
  return (
    <>
      <div className="experience-wrapper">
        <div className="container experience-tag">
          <button className="experience-button">Experience</button>
        </div>
        <div className="container experience-desc">
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div className="container experience-card-output">
          {Experiencelist.map((experience) => (
            <Experiencecard
              key={experience.id}
              image={experience.src}
              alt={experience.alt}
              title={experience.title}
              desc={experience.desc}
              date={experience.date}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Experience;
