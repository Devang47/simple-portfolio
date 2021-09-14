import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Content() {
  return (
    <section className="main_card">
      <div className="social_icons">
        <a href="#" className="twitter_logo">
          <FaTwitter />
        </a>
        <a href="#" className="github_logo">
          <FaGithub />
        </a>
      </div>
      <section className="container">
        <h1 className="name primary">
          Hi, i'm Devang Saklani<span className="highlighted">.</span>
        </h1>
        <div className="divider highlighted_bg"></div>

        <section className="description secondary">
          <p>
            I'm a Full stack Web developer, currently learning libraries like
            React and Three js. I'm also pretty good at UI and UX design. My
            arsenal includes tech like: 
            <span className="highlighted"> React</span>,
            <span className="highlighted"> Three js</span>, 
            <span className="highlighted"> Figma</span> and other supporting
            libraries (Redux, Scss etc.) .
          </p>
          <p>
            I have worked in many big tech companies like
            <span className="highlighted"> Apple</span> and
            <span className="highlighted"> Google</span> as a Full stack
            developer.
          </p>
          <p>
            Although i’m currently not looking for job opportunities but my
            inbox is always open:
            <span className="highlighted"> devangsaklani@gmail.com</span>
          </p>
          <p>These are some of my recent projects:</p>
        </section>
        <div className="projects">
          <div className="project_1 highlighted_bg project">
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              {/* <img src="#" alt="Project" /> */}
            </a>
          </div>
          <div className="project_2 highlighted_bg project">
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              {/* <img src="#" alt="Project" /> */}
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Content;
