import React from "react";
import "../../assets/styles/About.css";
import pic2 from "../../assets/images/Pic2.png";
function About() {
  return (
    <>
      <div className="about-wrapper">
        <div className="container">
          <div className="row-1">
            <button>About Me</button>
          </div>
          <div className="row-2 container-info">
            <div className="col-1 profile-pic-2">
              <img className="pic-2" alt="pic-2" src={pic2}></img>
              <div className="background-div-2"></div>
            </div>
            <div className="col-2 information">
              <div className="row-header">
                <span className="title">
                  Curious about me? Here you have it:
                </span>
              </div>
              <div className="row-desc-1">
                <span className="my-self">
                  I'm a passionate, self-proclaimed designer who specializes in
                  full stack development (React.js & Node.js). I am very
                  enthusiastic about bringing the technical and visual aspects
                  of digital products to life. User experience, pixel perfect
                  design, and writing clear, readable, highly performant code
                  matters to me.
                </span>
              </div>
              <div className="row-desc-2">
                <span className="journey">
                  I began my journey as a web developer in 2015, and since then,
                  I've continued to grow and evolve as a developer, taking on
                  new challenges and learning the latest technologies along the
                  way. Now, in my early thirties, 7 years after starting my web
                  development journey, I'm building cutting-edge web
                  applications using modern technologies such as Next.js,
                  TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                </span>
              </div>
              <div className="row-desc-3">
                <span className="journey-2">
                  I am very much a progressive thinker and enjoy working on
                  products end to end, from ideation all the way to development.
                </span>
              </div>

              <div className="row-desc-4">
                <span className="journey-3">
                  When I'm not in full-on developer mode, you can find me
                  hovering around on twitter or on indie hacker, witnessing the
                  journey of early startups or enjoying some free time. You can
                  follow me on Twitter where I share tech-related bites and
                  build in public, or you can follow me on GitHub.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
