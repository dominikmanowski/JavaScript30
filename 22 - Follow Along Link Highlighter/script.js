const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function highLightLink() {
  const linkCoords = this.getBoundingClientRect();
  const { top, left, height, width } = linkCoords;
  const coords = {
    top: top + window.scrollY,
    left: left + window.scrollX
  };
  highlight.style.height = `${height}px`;
  highlight.style.width = `${width}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener("mouseenter", highLightLink));
