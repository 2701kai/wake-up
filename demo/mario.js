window.onload = function () {
  // Select the video element by its new ID
  let videoMario = document.getElementById("marioVideo");
  let mario = document.getElementById("mario");
  let backgroundVideo = document.getElementById("backgroundVideo");
  let plexico = document.getElementById("plexico");

  // Start the animation and media immediately on page load
  startMario(videoMario, mario, backgroundVideo, plexico);

  // Set up snooze and alarm functionality
  setupSnooze(videoMario, mario, backgroundVideo, plexico);
  setupAlarm();
};

let snoozeTimeout = null;

function startMario(videoMario, mario, backgroundVideo, plexico) {
  // The source for the video is already defined in the HTML <source> element.
  mario.classList.add("dancing");
  videoMario.style.display = "block";
  backgroundVideo.style.display = "block";
  
  // Start playing both videos and the audio
  videoMario.play();
  backgroundVideo.play();
  plexico.play();
}

function setupSnooze(videoMario, mario, backgroundVideo, plexico) {
  let snoozeButton = document.getElementById("spaceButton");

  snoozeButton.addEventListener("click", function () {
    snoozeMario(videoMario, mario, backgroundVideo, plexico);
  });

  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      snoozeMario(videoMario, mario, backgroundVideo, plexico);
    }
  });
}

function snoozeMario(videoMario, mario, backgroundVideo, plexico) {
  if (snoozeTimeout) {
    clearTimeout(snoozeTimeout);
  }

  mario.classList.remove("dancing");
  backgroundVideo.pause();
  plexico.pause();
  
  // For snooze, pause and hide the Mario video.
  videoMario.pause();
  videoMario.style.display = "none";

  snoozeTimeout = setTimeout(function () {
    startMario(videoMario, mario, backgroundVideo, plexico);
  }, 6000);
}

function setupAlarm() {
  let alarmButton = document.getElementById("escapeButton");

  alarmButton.addEventListener("click", function () {
    window.location.href = "./index.html";
  });

  document.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
      window.location.href = "./index.html";
    }
  });
}

// Hide the hint after a short delay
const hint = document.querySelector(".hint");
setTimeout(() => {
  hint.classList.add("fade-out");
}, 3000);
