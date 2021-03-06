const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

let isDown = false;
speed.addEventListener("mousedown", () => {
  isDown = true;
});
speed.addEventListener("mouseup", () => {
  isDown = false;
});

speed.addEventListener("mousemove", function(e) {
  e.preventDefault();
  if (!isDown) return;
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 3;
  const height = Math.round(percent * 100) + "%";
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + "x";
  video.playbackRate = playbackRate;
});
