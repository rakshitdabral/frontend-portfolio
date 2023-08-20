import React from "react";
import imagesList from "../../constants/Imagelist";
import Skillscard from "../../components/Skillscard/Skillscard";
import "../../assets/styles/Skills.css";
function Skills() {
  return (
    <>
      <div className="skills-wrapper">
        <div className="container  row skills-tag">
        <button className="skills-button">Skills</button>
        </div>
        <div className="container  row skills-desc">
            <p>The skills, tools and technologies I am really good at:</p>
        </div>

        <div className="container row skills-card-output">
          {imagesList.map((image) => (
            <Skillscard
              key={image.id}
              image={image.src}
              alt={image.alt}
              title={image.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
