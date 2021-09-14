import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Content() {
  const fullCard = useRef(null);
  const heading = useRef(null);
  const dividerLine = useRef(null);
  const paragraph = useRef(null);
  const socialIcons = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .from(fullCard.current, {
        delay: 4,
        translateY: -50,
        duration: 0.4,
        opacity: 0,
      })
      .from(heading.current, {
        translateY: -20,
        duration: 0.4,
        opacity: 0,
      })
      .from(dividerLine.current, {
        width: 0,
        duration: 0.4,
        ease: "sine.out",
      })
      .from(paragraph.current, {
        opacity: 0,
        translateY: 20,
        duration: 0.4,
        ease: "sine.out",
      })
      .from([card1.current, card2.current], {
        opacity: 0,
        translateY: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "sine.out",
      })
      .from(socialIcons.current, {
        opacity: 0,
        duration: 0.4,
        ease: "sine.out",
      });
  });

  return (
    <section className="main_card" ref={fullCard}>
      <div className="social_icons" ref={socialIcons}>
        <a href="#" className="twitter_logo">
          <FaTwitter />
        </a>
        <a href="#" className="github_logo">
          <FaGithub />
        </a>
      </div>
      <section className="container">
        <h1 className="name primary" ref={heading}>
          Hi, i'm Devang Saklani<span className="highlighted">.</span>
        </h1>
        <div className="divider highlighted_bg" ref={dividerLine}></div>

        <section className="description secondary" ref={paragraph}>
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
            inbox is always open: &nbsp;
            <a href="mailto:devangsaklani@gmail.com" className="highlighted">
              devangsaklani@gmail.com
            </a>
          </p>
          <p>These are some of my recent projects:</p>
        </section>
        <div className="projects">
          <div className="project_1 highlighted_bg project" ref={card1}>
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              {/* <img src="#" alt="Project" /> */}
            </a>
          </div>
          <div className="project_2 highlighted_bg project" ref={card2}>
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
