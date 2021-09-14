import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Loading() {
  const loadingBar = useRef(null);
  const loadingScreen = useRef(null);

  useEffect(() => {
    const timeLine = gsap.timeline();
    timeLine.to(loadingBar.current, {
      width: "100%",
      duration: 3,
      ease: "expo. inOut",
    });
    timeLine.to(loadingBar.current, { opacity: "0", duration: 0.2 });
    timeLine.to(loadingScreen.current, {
      opacity: 0,
      display: "none",
      duration: 0.5,
    });
  });

  return (
    <section ref={loadingScreen} className="loading_section">
      <div className="loading_wrapper">
        <div className="bar" ref={loadingBar}></div>
      </div>
    </section>
  );
}

export default Loading;
