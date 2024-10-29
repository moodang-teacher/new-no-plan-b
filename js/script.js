$(function () {
  const tl = gsap.timeline();

  // header
  tl.from(".logo", { y: -100, autoAlpha: 0 });
  tl.from("nav > a", { y: -100, autoAlpha: 0, stagger: 0.25 }, "-=0.4");
  tl.from(".menu", { y: -100, autoAlpha: 0 }), "-=0.4";

  // footer
  tl.from(".foot-box", { width: 0, autoAlpha: 0 });
  tl.from(".sns-link li", { x: -50, autoAlpha: 0, stagger: 0.2 });
  tl.from(".copyright", { x: -50, autoAlpha: 0 }, "-=0.4");

  // bruce lee
  tl.from(
    ".bruce-lee-bg",
    {
      autoAlpha: 0,
      scale: 0.9,
      duration: 3,
      ease: "none",
    },
    1 // 전체 타임라인의 1초 지점에서 시작
  );

  tl.from(".bruce-lee", {
    autoAlpha: 0,
    scale: 1.2,
    ease: "power4.inOut",
  });

  // title
  tl.from(".title h2 strong", {
    x: -50,
    autoAlpha: 0,
    duration: 1,
  });

  tl.from(
    ".title h2 span",
    {
      x: -50,
      autoAlpha: 0,
      duration: 1,
      onComplete: () => Splitting(),
    },
    "-=0.8"
  );

  tl.from(".small-bruce-lee", {
    xPercent: 200 /* 200% */,
    duration: 0.7,
    ease: "elastic.inOut(1,0.3)",
    onComplete: () => {
      $(".small-bruce-lee").addClass("action");
    },
  });

  // 여기 skip할 때 도달할 지점
  tl.addLabel("end");

  tl.from(".btn-skip", { x: -100, autoAlpha: 0 }, 0);

  // skip클릭했을 때
  $(".btn-skip").on("click", () => {
    tl.seek("end");
  });
});
