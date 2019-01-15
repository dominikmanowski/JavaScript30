const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 300;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  const shadowBlur = Math.floor(
    Math.sqrt(Math.pow(xWalk / 2, 2) + Math.pow(yWalk / 2, 2))
  );

  console.log(shadowBlur);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px ${shadowBlur}px rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px ${shadowBlur}px rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px ${shadowBlur}px rgba(0,0,255,0.7),
    ${yWalk * -1}px ${xWalk}px ${shadowBlur}px rgba(0,255,0,0.7)
  `;
}

hero.addEventListener("mousemove", shadow);
