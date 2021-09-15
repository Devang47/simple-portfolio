import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
import anime from "animejs";

function Loading() {
  const loadingBar = useRef(null);
  const loadingScreen = useRef(null);

  const [hidden, setHidden] = React.useState(false);

  // useEffect(() => {
  //   const timeLine = gsap.timeline();
  //   timeLine.to(loadingBar.current, {
  //     width: "100%",
  //     duration: 3,
  //     ease: "expo. inOut",
  //   });
  //   timeLine.to(loadingBar.current, { opacity: "0", duration: 0.2 });
  //   timeLine.to(loadingScreen.current, {
  //     opacity: 0,
  //     display: "none",
  //     duration: 0.5,
  //   });
  // });

  useEffect(() => {
    const tl = anime
      .timeline({
        easing: "easeOutSine",
      })
      .add({
        targets: loadingBar.current,
        width: [0, "100%"],
        duration: 2000,
      })
      .add({
        targets: loadingBar.current,
        opacity: 0,
        duration: 250,
      })
      .add({
        targets: loadingScreen.current,
        opacity: [1, 0],
        duration: 400,
        complete: () => {
          setHidden(true);
        },
      });
  });

  return (
    <section
      ref={loadingScreen}
      className={hidden ? "loading_section hide" : "loading_section"}
    >
      <div className="loading_wrapper">
        <div className="bar" ref={loadingBar}></div>
      </div>
    </section>
  );
}

export default Loading;
