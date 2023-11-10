window.onload = function () {
  let imgMario = document.querySelector("#mario img");
  let mario = document.getElementById("mario");
  let backgroundVideo = document.getElementById("backgroundVideo");
  let plexico = document.getElementById("plexico");

  // Start the animation and media immediately on page load
  startMario(imgMario, mario, backgroundVideo, plexico);

  // Set up snooze and alarm functionality
  setupSnooze(imgMario, mario, backgroundVideo, plexico);
  setupAlarm();
};

let snoozeTimeout = null;

function startMario(imgMario, mario, backgroundVideo, plexico) {
  imgMario.src = "./mario-dance-moves.gif";
  mario.classList.add("dancing");
  imgMario.style.display = "block";
  backgroundVideo.style.display = "block";
  backgroundVideo.play();
  plexico.play();
}

function setupSnooze(imgMario, mario, backgroundVideo, plexico) {
  let snoozeButton = document.getElementById("spaceButton");

  snoozeButton.addEventListener("click", function () {
    snoozeMario(imgMario, mario, backgroundVideo, plexico);
  });

  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      snoozeMario(imgMario, mario, backgroundVideo, plexico);
    }
  });
}

function snoozeMario(imgMario, mario, backgroundVideo, plexico) {
  if (snoozeTimeout) {
    clearTimeout(snoozeTimeout);
  }

  mario.classList.remove("dancing");
  backgroundVideo.pause();
  plexico.pause();
  imgMario.src = "./coffee.png";

  snoozeTimeout = setTimeout(function () {
    startMario(imgMario, mario, backgroundVideo, plexico);
  }, 600000);
}

function setupAlarm() {
  let alarmButton = document.getElementById("escapeButton");

  alarmButton.addEventListener("click", function () {
    window.location.href = "../../index.html";
  });

  document.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
      window.location.href = "../../index.html";
    }
  });
}

// added <div class="hint"> visibility to vanish after 10 seconds:
const hint = document.querySelector(".hint");
setTimeout(() => {
  //   hint.style.visibility = "hidden"; // w.o. fade-out
  hint.classList.add("fade-out");
}, 3000);
