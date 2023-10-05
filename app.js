// document.ready(function () {
//   var scramble = $(".scramble");
//   scramble.scramble(3000, 20, "alphabet", true);
// });

let ar2 = document.querySelector(".ar2");
window.onload = function () {
  setTimeout(function () {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      ar2.innerText = ar2.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return ar2.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= ar2.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 150);
  }, 200);
};

var ta = gsap.timeline();

ta.to(".loading", {
  opacity: 0,
  delay: 2.5,
})
  .to("#loader", {
    opacity: 0,
    duration: 0,
    ease: "Expo.easeInOut",
    y: "-100%",
    duration: 0,
  })
  .from("#header", {
    display: "none",
    duration: 1.5,

    // // x: -50,
    y: "100%",
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // // height: "50%",
    // // transform: "translate(-50% , -50%)",
    ease: "Expo.easeInOut",
  });

//   header

ta.from(".mtext", {
  opacity: 0,
  duration: 0.8,

  right: 100,
});

ta.from(".tbtn", {
  opacity: 0,
  duration: 0.6,

  right: 100,
});

ta.from(".img1", {
  opacity: 0,
  duration: 0.8,
  left: 1110,
});

ta.from(".img2", {
  opacity: 0,
  duration: 0.8,
  bottom: 100,
});

ta.from(".img3", {
  opacity: 0,
  duration: 0.8,
  bottom: 100,
  scale: 1.4,
});

ta.from(".mtxt2", {
  opacity: 0,
  duration: 0.6,

  right: 100,
});

ta.from(".scroll", {
  opacity: 0,
  duration: 0.6,

  right: 100,
});
