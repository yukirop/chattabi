const mediaQueryList = window.matchMedia("(min-width: 1000px)");

const listener = (event) => {
  // リサイズ時に行う処理
  if (event.matches) {
    // 768px以上

    const htu_steps = document.querySelectorAll(".step_animation");

    htu_steps.forEach((target, i) => {
      // if (i !== 0) {
      //     gsap.set(target, {
      //         opacity: 0,
      //     })
      // }
      gsap.set(target, {
        opacity: 0,
      });

      ScrollTrigger.create({
        start: "center center",
        end: "+=900",
        trigger: target,
        // markers: true,
        pin: true,
        // onEnter: () => {
        //     gsap.to(target, { opacity: 1, duration: 0.8})
        // },
        // onEnterBack: () => {
        //     gsap.to(target, { opacity: 1, duration: 0.8})
        // },
        // onLeave: () => {
        //     // gsap.to(target, { opacity: 0, duration: 0.8})
        // },
        // onLeaveBack: () => {
        //     gsap.to(target, { opacity: 0, duration: 0.8})
        // },
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, { opacity: 1, duration: 0 });
          } else {
            gsap.to(entry.target, { opacity: 0, duration: 0 });
          }
        });
      },
      {
        rootMargin: "-21% 0px -23% 0px",
        threshold: 0.5,
      }
    );

    htu_steps.forEach((item) => {
      observer.observe(item);
    });
  } else {
    // 768px未満
  }
};

mediaQueryList.addEventListener("change", listener);
listener(mediaQueryList);
