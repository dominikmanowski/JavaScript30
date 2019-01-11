const player = document.querySelector(".player");

const select = element => player.querySelector(`${element}`);

const video = select(".viewer");
const progress = select(".progress");
const progressBar = select(".progress__filled");
const toggle = select(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

const togglePlay = () => (video.paused ? video.play() : video.pause());

const updateButton = ({ target }) => {
  toggle.textContent = target.paused ? "►" : "❚ ❚";
};

const skip = ({ target }) => {
  video.currentTime += parseFloat(target.dataset.skip);
};

const handleRangeUpdate = ({ target }) => {
  video[target.name] = target.value;
};

const handleProgress = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

const scrub = e => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

video.addEventListener("timeupdate", handleProgress);

skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));

let isMousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", e => isMousedown && scrub(e));
progress.addEventListener("mousedown", () => (isMousedown = true));
progress.addEventListener("mouseup", () => (isMousedown = false));
