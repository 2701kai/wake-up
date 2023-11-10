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

  // Start the snooze functionality immediately on page load
  setupSnooze(imgMario, mario, backgroundVideo, plexico);
};

let snoozeTimeout = null;

function setupSnooze(imgMario, mario, backgroundVideo, plexico) {
  document.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
      window.location.href = "../../index.html"; // This will navigate to index.html
    } else if (event.code === "Space") {
      snoozeMario(imgMario, mario, backgroundVideo, plexico);
    }
  });
}

function snoozeMario(imgMario, mario, backgroundVideo, plexico) {
  // If there is an existing snooze timeout, clear it
  if (snoozeTimeout) {
    clearTimeout(snoozeTimeout);
  }

  // Pause the animations and media
  mario.classList.remove("dancing");
  backgroundVideo.pause();
  plexico.pause();
  imgMario.src = "./coffee_small.png"; // Change the image source to the walking or standing still image.

  // Snooze timeout: T - 10 min.
  snoozeTimeout = setTimeout(function () {
    mario.classList.add("dancing");
    imgMario.style.display = "block";
    backgroundVideo.style.display = "block";
    backgroundVideo.play();
    plexico.play();
    imgMario.src = "./mario-dance-moves.gif";
  }, 6000);
}

// Add touch support for mobile devices
document.addEventListener("DOMContentLoaded", (event) => {
  let spaceButton = document.getElementById("spaceButton");
  let escapeButton = document.getElementById("escapeButton");

  spaceButton.addEventListener("click", function () {
    // The functionality for the "click" event will be similar to pressing the "Space" key
    let imgMario = document.querySelector("#mario img");
    let mario = document.getElementById("mario");
    let backgroundVideo = document.getElementById("backgroundVideo");
    let plexico = document.getElementById("plexico");
    snoozeMario(imgMario, mario, backgroundVideo, plexico);
  });

  escapeButton.addEventListener("click", function () {
    window.location.href = "../../index.html";
  });
});
