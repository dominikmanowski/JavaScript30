const select = element => document.querySelector(element);

const secondHand = select(".hour-hand");
const minuteHand = select(".min-hand");
const hourHand = select(".second-hand");
const hands = document.querySelectorAll(".hand");

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDeg = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  const minutes = now.getMinutes();
  const minutesDeg = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

  const hours = now.getHours();
  const hoursDeg = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;

  if (secondsDeg < 90)
    hands.forEach(hand => hand.classList.remove("transition"));
  else if (!secondHand.classList.contains("trans"))
    hands.forEach(hand => hand.classList.add("transition"));
};

setInterval(setDate, 1000);
