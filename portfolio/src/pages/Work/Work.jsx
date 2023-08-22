import React from "react";
import Workcard from "../../components/Workcard/Workcard";
import "../../assets/styles/Work.css";
import Worklist from "../../constants/Worklist";

function Work() {
  return (
    <div id="work">
      <div className="work-wrapper">
        <div className="work-tag">
          <button className="work-tagger">Work</button>
        </div>
        <div className="work-desc">
          <p>Some of the noteworthy projects I have built:</p>
        </div>
        <div className="work-card-shower">
          {Worklist.map((work) => (
            <Workcard
              serial={work.serial}
              src={work.src}
              alt={work.alt}
              title={work.title}
              skills={work.skills}
              desc={work.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
