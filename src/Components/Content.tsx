import React, { useRef, useEffect } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import anime from "animejs";

function Content() {
  const fullCard = useRef(null);
  const heading = useRef(null);
  const dividerLine = useRef(null);
  const paragraph = useRef(null);
  const socialIcons = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);

  useEffect(() => {
    anime
      .timeline({
        easing: "easeInOutSine",
      })
      .add({
        targets: fullCard.current,
        translateY: [-50, 0],
        opacity: [0, 1],
        delay: 2750,
        duration: 400,
      })
      .add({
        targets: socialIcons.current,
        opacity: [0, 1],
        duration: 600,
      })
      .add({
        targets: heading.current,
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 600,
      })
      .add(
        {
          targets: dividerLine.current,
          width: [0, 85],
          duration: 700,
        },
        "-=400"
      )
      .add({
        targets: paragraph.current,
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 600,
      })
      .add({
        targets: [card1.current, card2.current],
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(100),
      });
  });

  return (
    <section className="main_card" ref={fullCard}>
      <div className="social_icons" ref={socialIcons}>
        <a
          href="https://twitter.com/DevangSaklani"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter_logo"
          aria-label="Twitter profile"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/Devang47/simple-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="github_logo"
          aria-label="Github profile"
        >
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
            inbox is always open:&nbsp;
            <a href="mailto:devangsaklani@gmail.com" className="highlighted">
              devangsaklani@gmail.com
            </a>
          </p>
          <p>These are some of my recent projects:</p>
        </section>
        <div className="projects">
          <div className="project_1 highlighted_bg project" ref={card1}>
            <a
              href="http://#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Project1"
            >
              {/* add your project cover image here */}
              {/* <img src="#" alt="Project" /> */}
            </a>
          </div>
          <div className="project_2 highlighted_bg project" ref={card2}>
            <a
              href="http://#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Project2"
            >
              {/* add your project cover image here */}
              {/* <img src="#" alt="Project" /> */}
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Content;
