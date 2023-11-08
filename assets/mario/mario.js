// let mario = document.getElementById("mario");
// let imgMario = mario.querySelector("img");
// imgMario.classList.add("hidden");

// // Setting the initial source of image to mario-walk.gif
// // imgMario.src = "./mario-dance-moves.gif";

// // Add touch support for mobile devices
// let spaceButton = document.getElementById("spaceButton");
// let escapeButton = document.getElementById("escapeButton");

// // Adding the functionality for Mario to dance
// let plexico = document.getElementById("plexico");
// let backgroundVideo = document.getElementById("backgroundVideo");

// document.addEventListener("keydown", function (event) {
//   if (event.code === "Space") {
//     mario.classList.add("dancing");
//     mario.style.display = "block";
//     backgroundVideo.style.display = "block";
//     // backgroundVideo.classList.add("bg-video");
//     backgroundVideo.play();
//     plexico.play();
//     document.getElementById("instructions").classList.add("hidden");
//     imgMario.src = "./mario-dance-moves.gif";
//   } else if (event.code === "Escape") {
//     // mario.classList.remove("fullHeight");
//     mario.classList.remove("dancing");
//     backgroundVideo.pause();
//     backgroundVideo.style.display = "none";
//     plexico.pause();
//     document.getElementById("instructions").classList.remove("hidden");
//     imgMario.src = "./assets/mario-walk.gif"; // Assuming mario-stand.gif is the standing still image.
//   }
// });

document.addEventListener("keydown", function (event) {
  let imgMario = document.querySelector("#mario img"); // Ensure you select the image inside the #mario div
  let mario = document.getElementById("mario"); // Make sure you have the mario element
  let backgroundVideo = document.getElementById("backgroundVideo"); // Assuming you have an element with this ID for the background video
  let plexico = document.getElementById("plexico"); // Assuming you have an element with this ID for the audio
  if (event.code === "Space") {
    mario.classList.add("dancing");
    imgMario.style.display = "block"; // Change the display of the img, not the mario div
    backgroundVideo.style.display = "block";
    backgroundVideo.play();
    plexico.play();
    // document.getElementById("instructions").classList.add("hidden");
    imgMario.src = "./mario-dance-moves.gif"; // Change the image source to the dancing moves
  } else if (event.code === "Escape") {
    // mario.classList.remove("dancing");
    // backgroundVideo.pause();
    // backgroundVideo.style.display = "none";
    // plexico.pause();
    // // document.getElementById("instructions").classList.remove("hidden");
    // imgMario.src = "./assets/mario-walk.gif"; // Change the image source to the walking or standing still image.
    location.reload();
  }
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
    location.reload(); // Only uncomment if you want to reload the entire page
  });
});

// Call the moveMario function to start listening for keyboard events
// moveMario();
