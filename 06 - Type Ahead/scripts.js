const endpoint = "http://localhost:3000/cities";
// const endpoint =
//   "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then(data => data.json())
  .then(data => cities.push(...data));

const findMatches = (wordToMatch, cities) => {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.city.match(regex);
  });
};

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const displayMatches = e => {
  const inputValue = e.target.value;
  const matchArray = findMatches(inputValue, cities);
  const html = matchArray
    .map(place => {
      const regex = new RegExp(inputValue, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${inputValue}</span>`
      );
      const stateName = place.city.replace(
        regex,
        `<span class="hl">${inputValue}</span>`
      );
      return `
    <li class="name">
      <span>${cityName}, ${stateName}</span>
      <span>${numberWithCommas(place.population)}</span>
    </li>
  `;
    })
    .join("");
  suggestions.innerHTML =
    inputValue.length !== 0
      ? html
      : "<li>Filter for a city</li><li>or a state</li>";
};

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("keyup", _.debounce(displayMatches, 200));
searchInput.addEventListener("change", _.debounce(displayMatches, 200));
