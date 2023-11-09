// --------------------------------------------------------------
// Start animation on SPACE, stop on ESCAPE:
// --------------------------------------------------------------

// // document.addEventListener("keydown", function (event) {
// document.addEventListener("keydown", function (event) {
//   let imgMario = document.querySelector("#mario img"); // select the image inside #mario div
//   let mario = document.getElementById("mario");
//   let backgroundVideo = document.getElementById("backgroundVideo");
//   let plexico = document.getElementById("plexico");
//   if (event.code === "Space") {
//     mario.classList.add("dancing");
//     imgMario.style.display = "block";
//     backgroundVideo.style.display = "block";
//     backgroundVideo.play();
//     plexico.play();
//     // document.getElementById("instructions").classList.add("hidden");
//     // imgMario.src = "./mario-dance-moves.gif";
//   } else if (event.code === "Escape") {
//     // mario.classList.remove("dancing");
//     // backgroundVideo.pause();
//     // backgroundVideo.style.display = "none";
//     // plexico.pause();
//     // // document.getElementById("instructions").classList.remove("hidden");
//     // imgMario.src = "./assets/mario-walk.gif"; // Change the image source to the walking or standing still image.
//     // location.reload();
//     function openAlarmClock() {
//       // Logic to open "mario.html" will be added here
//       window.location.href = "../../index.html"; // This will navigate to mario.html
//     }

//     openAlarmClock();
//   }
// });

// --------------------------------------------------------------
// Start animation on page loaded, stop on ESCAPE:
// --------------------------------------------------------------

window.onload = function () {
  let imgMario = document.querySelector("#mario img"); // select the image inside #mario div
  let mario = document.getElementById("mario");
  let backgroundVideo = document.getElementById("backgroundVideo");
  let plexico = document.getElementById("plexico");

  mario.classList.add("dancing");
  imgMario.style.display = "block";
  backgroundVideo.style.display = "block";
  backgroundVideo.play();
  plexico.play();
};

document.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    window.location.href = "../../index.html"; // This will navigate to mario.html
  }

  //   openAlarmClock();
});

// Add touch support for mobile devices
document.addEventListener("DOMContentLoaded", (event) => {
  // let spaceButton = document.getElementById("spaceButton");
  // let escapeButton = document.getElementById("escapeButton");
  spaceButton.addEventListener("click", function () {
    mario.classList.add("dancing");
    document.getElementById("backgroundVideo").style.display = "block";
    backgroundVideo.play();
    document.getElementById("plexico").play();
    document.getElementById("instructions").classList.add("hidden");
    imgMario.src = "./assets/mario-dance-moves.gif";
  });

  escapeButton.addEventListener("click", function () {
    // document.getElementById("backgroundVideo").pause();
    // document.getElementById("backgroundVideo").style.display = "none";
    // document.getElementById("plexico").pause();
    // document.getElementById("instructions").classList.remove("hidden");
    // imgMario.src = "./assets/mario-stand.gif";
    location.reload();
  });
});

// Call the moveMario function to start listening for keyboard events
// moveMario();
