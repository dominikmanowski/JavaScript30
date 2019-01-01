const select = element => document.querySelector(element);

const playSound = e => {
  const audio = select(`audio[data-key="${e.keyCode}"]`);
  const key = select(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};

const removeTransition = e => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
